import { Injectable, Logger } from '@nestjs/common';
import { Cron, Timeout } from '@nestjs/schedule';
import { Juejin } from '../../interfaces/index';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateJuejinDTO } from '../../dto/index';
const pptr: any = require('puppeteer');
@Injectable()
export class JuejinService {
  constructor(
    @InjectModel('Juejin') private readonly juejinModel: Model<Juejin[]>,
  ) {}
  private readonly logger = new Logger(JuejinService.name);

  // 周一到周日早上8点半
  @Cron('0 00 22 * * *')
  // @Cron('0 12 16 * * 1-5')
  // @Timeout(5000)
  async dailyGetJuejinLikeList() {
    this.logger.log('daily mission: get juejin like list');
    const url: string = 'https://juejin.im/user/5bb5eb00e51d453eb93d896d/likes';
    let data: Juejin[] = await pptr
      .launch({
        headless: true,
      })
      .then(async browser => {
        const page = await browser.newPage();
        await page.goto(url);
        await page.waitFor(2000);
        let ulDOM = await page.$('.entry-list');
        let res = await page.evaluate(ul => {
          let ret: Juejin[] = [];
          let list = ul.querySelectorAll('.item');
          for (let i = 0; i < list.length; i++) {
            let titleDOM = list[i].querySelector('.title');
            let link, title, likeCount;
            if (!titleDOM) {
              link = '';
              title = '';
            } else {
              link = titleDOM.href;
              title = titleDOM.innerText;
            }

            let tags = [];
            let tagsDOM = list[i].querySelectorAll('a.tag');
            if (tagsDOM) {
              for (let tag of tagsDOM) {
                tags.push(tag.innerText);
              }
            }
            let countDOM = list[i].querySelector('.count');
            if (!countDOM) {
              likeCount = 0;
            } else {
              likeCount = countDOM.innerText;
            }
            if (
              link !== '' &&
              title !== '' &&
              likeCount !== 0 &&
              tags.length !== 0
            ) {
              ret.push({ link, title, likeCount, tags });
            }
          }
          return ret;
        }, ulDOM);
        return res;
      });
    this.logger.log(`数据长度${data.length}`);
    this.logger.log(data[0]);
    // 保存获取的数据到数据库
    await this.juejinModel.remove();
    for (let i = 0; i < data.length; i++) {
      // let newList = await new this.juejinModel(data[i]);
      let res = await this.saveJuejinLikeList(data[i]);
    }
    this.logger.log('每日保存成功');
  }

  async saveJuejinLikeList(data: CreateJuejinDTO): Promise<Juejin> {
    const newList = await new this.juejinModel(data);
    return await newList.save();
  }

  async getJuejinLikeList(): Promise<Juejin[]> {
    const data = await this.juejinModel.find();
    return data;
  }
}
