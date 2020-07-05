import { Injectable, Logger } from '@nestjs/common';
import { Cron, Timeout } from '@nestjs/schedule';
import { Juejin } from '../../interfaces/index';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateJuejinDTO } from '../../dto/index';

@Injectable()
export class JuejinService {
  constructor(
    @InjectModel('Juejin') private readonly juejinModel: Model<Juejin[]>,
  ) {}
  private readonly logger = new Logger(JuejinService.name);

  // 周一到周日早上8点半
  @Cron('00 00 12 * * *')
  // @Cron('0 12 16 * * 1-5')
  // @Timeout(5000)
  async dailyGetJuejinLikeList() {
    this.logger.log('daily mission: get juejin like list');
    const url: string = 'https://juejin.im/user/5bb5eb00e51d453eb93d896d/likes';
    // TODO use axios instead
    let data: Juejin[] = [];
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
}
