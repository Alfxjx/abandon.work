import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Juejin } from './interfaces/spider.interface';
import { JuejinDTO } from './dto/spider.dto';
// import pptr from 'puppeteer';
const pptr: any = require('puppeteer');

@Injectable()
export class JuejinService {
  constructor(@InjectModel('Juejin') private readonly Juejin: Model<Juejin>) {}
  async getJuejinLikeList(): Promise<Juejin[]> {
    pptr
      .launch({
        headless: false,
      })
      .then(async browser => {
        const page = await browser.newPage();
      });
  }
}
