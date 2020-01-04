import { Module } from '@nestjs/common';
import { BbsService } from './bbs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BBSSchema } from './schemas/bbs.schema';
import { BbsController } from './bbs.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'BBS', schema: BBSSchema }])],
  providers: [BbsService],
  controllers: [BbsController],
})
export class BbsModule {}
