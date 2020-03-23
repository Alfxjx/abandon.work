import { Module } from '@nestjs/common';
import { JuheController } from './juhe.controller';
import { JuheService } from './juhe.service';
import { ScheduleModule } from '@nestjs/schedule';
// import { JuejinModule } from './tasks/Juejin/juejin.module';
import { JuejinService } from './tasks/Juejin/juejin.service';
import { JuejinSchema } from './schemas/index';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Juejin', schema: JuejinSchema }]),
    ScheduleModule.forRoot(),
    // JuejinModule,
  ],
  controllers: [JuheController],
  providers: [JuheService, JuejinService],
})
export class JuheModule {}
