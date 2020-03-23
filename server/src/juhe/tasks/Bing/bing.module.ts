import { Module } from '@nestjs/common';
import { BingService } from './bing.service';
import { BingSchema } from '../../schemas/index';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'Bing', schema: BingSchema }]),],
  providers: [BingService],
})
export class BingModule {}