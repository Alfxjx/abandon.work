import {
  Controller,
  Get,
  NotFoundException,
  Res,
  HttpStatus,
  Delete,
  Query,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { JuejinService } from './tasks/Juejin/juejin.service';
import { BingService } from './tasks/Bing/bing.service';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';
import { CreateBingDTO } from './dto';

@Controller('juhe')
export class JuheController {
  constructor(
    private juejinService: JuejinService,
    private bingService: BingService,
  ) {}

  @Get('juejin')
  async getLikes(@Res() res) {
    const data = await this.juejinService.getJuejinLikeList();
    if (!data) throw new NotFoundException('Posts find failed!');
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      data: data,
    });
  }

  // @Get('bing')
  // async getBing(@Res() res) {
  //   const data = await this.bingService.getBingLink();
  //   if (!data) throw new NotFoundException('Posts find failed!');
  //   return res.status(HttpStatus.OK).json({
  //     status: HttpStatus.OK,
  //     data: data,
  //   });
  // }

  // 启用了排序get列表 1是升序 -1是降序
  @Get('bing')
  async getBingSorted(@Res() res, @Query('sort') sort: number) {
    const data = await this.bingService.getBingLinkSorted(sort);
    if (!data) throw new NotFoundException('Posts find failed!');
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      data: data,
    });
  }

  @Get('bing/:id')
  async getBingById(@Res() res, @Param('id', new ValidateObjectId()) id) {
    const bingRes = await this.bingService.findBingById(id);
    if (!bingRes) throw new NotFoundException(id + ' Bing does not exist!');
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      data: bingRes,
    });
  }

  @Post('bing')
  async createBing(@Res() res, @Body() createBing: CreateBingDTO) {
    const bingPost = await this.bingService.createBing(createBing);
    if (!bingPost) throw new NotFoundException('创建失败');
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Bing has been submitted successfully!',
      data: bingPost,
    });
  }

  @Post('bing/likes')
  async likeOneBing(@Res() res, @Body() id: string) {
    let BingId = JSON.parse(JSON.stringify(id)).id;
    const like = await this.bingService.likeOneBing(BingId);
    if (!like) throw new NotFoundException('Bing does not exist!');
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      data: like,
    });
  }

  @Delete('bing')
  async deleteBing(@Res() res, @Query('id', new ValidateObjectId()) postID) {
    const deletedPost = await this.bingService.deleteBing(postID);
    if (!deletedPost) throw new NotFoundException('Bing does not exist!');
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'Bing bg has been deleted!',
      post: deletedPost,
    });
  }

  @Delete('bing/all')
  async deleteAllBing(@Res() res) {
    const del = await this.bingService.deleteBingAll();
    if (!del) throw new NotFoundException('Bing does not exist!');
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: 'All wallpapers has been deleted!',
    });
  }
}
