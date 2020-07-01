import { Injectable, Logger } from '@nestjs/common';
import { Cron, Timeout } from '@nestjs/schedule';
import { Bing } from '../../interfaces/index';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBingDTO } from '../../dto/index';
import axios from 'axios';

@Injectable()
export class BingService {
  constructor(@InjectModel('Bing') private readonly bingModel: Model<Bing>) {}
  private readonly logger = new Logger(BingService.name);

  @Timeout(3000)
  async test() {
    this.logger.log('test timeout 3000');
  }

  // @Cron('00 00 14 * * *')
  @Timeout(1000)
  async getBingLinks(): Promise<Bing> {
    // idx 第几个
    // number 表示请求的数量
    let idx = 0;
    let number = 1;
    const url = `https://cn.bing.com/HPImageArchive.aspx?format=js&idx=${idx}&n=${number}`;
    this.logger.log('get bing 壁纸...');
    let linkUrl = '';
    await axios.get(url).then(res => {
      linkUrl = res.data;
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
