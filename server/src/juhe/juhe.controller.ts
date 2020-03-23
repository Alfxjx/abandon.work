import { Controller, Get, NotFoundException, Res, HttpStatus } from '@nestjs/common';
import { JuejinService } from "./tasks/Juejin/juejin.service";
import { BingService } from './tasks/Bing/bing.service';

@Controller('juhe')
export class JuheController {
  constructor(private juejinService:JuejinService, private bingService:BingService){}

  @Get('juejin')
  async getLikes(@Res() res){
    const data = await this.juejinService.getJuejinLikeList();
    if(!data) throw new NotFoundException('Posts find failed!');
    return res.status(HttpStatus.OK).json({
      status:HttpStatus.OK,
      data:data
    });
  }

  @Get('bing')
  async getBing(@Res() res){
    const data = await this.bingService.getBingLink();
    if(!data) throw new NotFoundException('Posts find failed!');
    return res.status(HttpStatus.OK).json({
      status:HttpStatus.OK,
      data:data
    });
  }
}
