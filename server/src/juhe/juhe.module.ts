import { Module } from '@nestjs/common';
import { JuheController } from './juhe.controller';
import { JuheService } from './juhe.service';
import { ScheduleModule } from '@nestjs/schedule';
import { JuejinModule } from './tasks/Juejin/juejin.module';
import { JuejinService } from './tasks/Juejin/juejin.service';
import { BingModule } from './tasks/Bing/bing.module';
import { BingService } from './tasks/Bing/bing.service';
import { JuejinSchema, BingSchema } from './schemas/index';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Juejin', schema: JuejinSchema },
      { name: 'Bing', schema: BingSchema },
    ]),
    ScheduleModule.forRoot(),
    JuejinModule,
    BingModule,
  ],
  controllers: [JuheController],
  providers: [JuheService, JuejinService, BingService],
})
export class JuheModule {}
