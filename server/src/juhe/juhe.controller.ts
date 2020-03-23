import { Controller, Get, NotFoundException, Res, HttpStatus } from '@nestjs/common';
import { JuejinService } from "./tasks/Juejin/juejin.service";

@Controller('juhe')
export class JuheController {
  constructor(private juejinService:JuejinService){}

  @Get('')
  async getLikes(@Res() res){
    const data = await this.juejinService.getJuejinLikeList();
    if(!data) throw new NotFoundException('Posts find failed!');
    return res.status(HttpStatus.OK).json({
      status:HttpStatus.OK,
      data:data
    });
  }
}
