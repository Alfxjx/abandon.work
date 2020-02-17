import { Module } from '@nestjs/common';
import {PictureController} from './picture.controller'

@Module({
  providers: [],
  controllers: [PictureController],
})
export class PictureModule {}
