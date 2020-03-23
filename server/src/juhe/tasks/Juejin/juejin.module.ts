import { Module } from '@nestjs/common';
import { JuejinService } from './juejin.service';
import { JuejinSchema } from '../../schemas/index';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'Juejin', schema: JuejinSchema }]),],
  providers: [JuejinService],
})
export class JuejinModule {}
