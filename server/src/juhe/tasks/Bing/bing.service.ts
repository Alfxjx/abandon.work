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

  @Cron('0 0 12 * * *')
  // @Timeout(1000)
  async getBingLinks(): Promise<Bing> {
    this.logger.log('get bing 壁纸...');
    const url = 'https://cn.bing.com/';
    let linkUrl: string = await pptr
      .launch({
        headless: true,
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

  async getBingLink(): Promise<Bing[]> {
    // await this.bingModel.remove();
    const data = await this.bingModel.find();
    return data;
  }

  // TODO 改成enum
  async getBingLinkSorted(sort: number): Promise<Bing> {
    const data = await this.bingModel
      .find({})
      .sort({ likes: sort })
      .exec();
    return data;
  }

  async findBingById(id: string): Promise<Bing> {
    const res = await this.bingModel.findById(id);
    return res;
  }

  async likeOneBing(id: string) {
    let { likes } = await this.findBingById(id);
    const res = await this.bingModel.findByIdAndUpdate(
      id,
      {
        likes: ++likes,
      },
      { new: true },
    );
    return res;
  }

  async createBing(bingDTO: CreateBingDTO): Promise<Bing> {
    const newBing = await this.bingModel(bingDTO);
    return newBing.save();
  }

  async deleteBing(postID: string): Promise<any> {
    const deletedPost = await this.bingModel.findByIdAndRemove(postID);
    return deletedPost;
  }

  async deleteBingAll(): Promise<Bing> {
    const del = await this.bingModel.remove();
    return del;
  }
}
