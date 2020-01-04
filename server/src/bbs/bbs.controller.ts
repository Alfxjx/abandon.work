import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Delete,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { BbsService } from './bbs.service';
import { CreateBBSDTO } from './dto/create-bbs.dto';
import { ValidateObjectId } from 'src/shared/pipes/validate-object-id.pipes';

@Controller('bbs')
export class BbsController {
  constructor(private bbsService: BbsService) {}

  @Get('/list')
  async getBBSList(@Res() res) {
    const bbs = await this.bbsService.getBBSList();
    return res.status(HttpStatus.OK).json(bbs);
  }

  @Post('/new')
  async CreateNewBBS(@Res() res, @Body() CreateBBSDTO: CreateBBSDTO) {
    const newBBS = await this.bbsService.createNewBBS(CreateBBSDTO);
    return res.status(HttpStatus.OK).json({
      message: 'create bbs successfully',
      post: newBBS,
    });
  }

  @Delete('/delete')
  async deleteBBS(@Res() res, @Query('BBSID', new ValidateObjectId()) BBSID) {
    const delBBS = await this.bbsService.deleteBBS(BBSID);
    if (!delBBS) {
      throw new NotFoundException('BBS does not exist!');
    }
    return res.status(HttpStatus.OK).json({
      message: 'BBS has been deleted!',
      post: delBBS,
    });
  }
}
