import { Injectable, Logger } from '@nestjs/common';
import { Cron, Timeout } from '@nestjs/schedule';
import { Bing } from '../../interfaces/index';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBingDTO } from '../../dto/index';
const pptr: any = require('puppeteer');

@Injectable()
export class BingService {
  constructor(@InjectModel('Bing') private readonly bingModel: Model<Bing>) {}
  private readonly logger = new Logger(BingService.name);

  @Timeout(3000)
  async test() {
    this.logger.log('timeout 3000');
  }

  // @Cron('00 00 14 * * *')
  @Timeout(1000)
  async getBingLinks(): Promise<Bing> {
    this.logger.log('get bing 壁纸...');
    const url = 'https://cn.bing.com/';
    let linkUrl: string = await pptr
      .launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      })
      .then(async browser => {
        const page = await browser.newPage();
        await page.goto(url);
        await page.waitFor(2000);
        let bg = await page.$('#bgDiv');
        let res = await page.evaluate(bg => {
          let css = window.getComputedStyle(bg, null);
          let resUrl = css.backgroundImage;
          return /^url\(\"(\S+)\"\)$/i.exec(resUrl)[1];
        }, bg);
        await page.close();
        await browser.close();
        return res;
      });
    let date = new Date();
    this.logger.log('get bing 壁纸!');
    return this.saveLinks({
      date: date.toISOString(),
      link: linkUrl,
      likes: 0,
    });
  }

  private async saveLinks(link: CreateBingDTO): Promise<Bing> {
    let saveLinks = await this.bingModel(link);
    return await saveLinks.save();
  }
}
