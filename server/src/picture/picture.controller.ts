import {
  Controller,
  Res,
  Post,
  UploadedFile,
  BadRequestException,
  HttpStatus,
  Body,
  UseInterceptors,
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { PictureService } from "./picture.service";

@Controller('picture')
export class PictureController {
  constructor(private pictureService: PictureService) { }

  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  async uploadSinglePicture(@Res() res, @UploadedFile() file) {
    console.log(file.originalname);
    if (!file) throw new BadRequestException('400 use pic');
    let size: number = Math.floor(file.size / 1024);
    let img = await createWriteStream(
      join(__dirname, '../..', 'public', `${file.originalname}`),
    );
    await img.write(file.buffer);
    await this.pictureService.addPicture({
      filename: file.originalname,
      url: `http://www.abandon.work/api/public/${file.originalname}`,
      size: `${size}KB`,
    })
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Picture has been submitted successfully!',
      data: file.originalname,
      link: `http://www.abandon.work/api/public/${file.originalname}`,
      size: `${size}KB`,
    });
  }

  @Get()
  async getPictureList(@Res() res) {
    let list = await this.pictureService.findAll();
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      data: list
    })
  }
}
