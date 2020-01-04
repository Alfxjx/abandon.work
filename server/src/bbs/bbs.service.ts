import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BBS } from './interfaces/bbs.interface';
import { CreateBBSDTO } from './dto/create-bbs.dto';

@Injectable()
export class BbsService {
  constructor(@InjectModel('BBS') private readonly bbsModel: Model<BBS>) {}

  async getBBSList(): Promise<BBS[]> {
    const bbs = await this.bbsModel.find().exec();
    return bbs;
  }

  async createNewBBS(BBSDTO: CreateBBSDTO): Promise<BBS> {
    const newbbs = await this.bbsModel(BBSDTO);
    return newbbs.save();
  }

  async deleteBBS(BBSID): Promise<any> {
    const deletedBBS = await this.bbsModel.findByIdAndRemove(BBSID);
    return deletedBBS;
  }
}
