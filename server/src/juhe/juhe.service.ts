import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
// Bing & Juejin
import { CreateBingDTO, CreateJuejinDTO } from './dto/index';
import { Bing, Juejin } from './interfaces/index';

@Injectable()
export class JuheService {
  constructor(
    @InjectModel('Bing') private readonly bingModel: Model<Bing>,
    @InjectModel('Juejin') private readonly juejinModel: Model<Juejin>,
  ) {}
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

  async saveJuejinLikeList(data: CreateJuejinDTO): Promise<Juejin> {
    const newList = await new this.juejinModel(data);
    return await newList.save();
  }

  async getJuejinLikeList(): Promise<Juejin[]> {
    const data = await this.juejinModel.find();
    return data;
  }

  async deleteJuejinAll(): Promise<Juejin[]> {
    const data = await this.juejinModel.remove();
    return data;
  }
}
