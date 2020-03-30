import {
  Controller,
  Res,
  Post,
  UploadedFile,
  BadRequestException,
  HttpStatus,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { join } from 'path';

@Controller('picture')
export class PictureController {
  constructor() {}

  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  async uploadSinglePicture(@Res() res, @UploadedFile() file) {
    console.log(file.originalname);
    let img = createWriteStream(
      join(__dirname, '../..', 'public', `${file.originalname}`),
    );
    img.write(file.buffer);
    if (!file) throw new BadRequestException('400 use pic');
    let size: number = Math.floor(file.size / 1024);
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Picture has been submitted successfully!',
      data: file.originalname,
      link: `http://abandon.work/api/public/${file.originalname}`,
      size: `${size}KB`,
    });
  }
}
