import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { BbsService } from './bbs.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BBSSchema } from './schemas/bbs.schema';
import { BbsController } from './bbs.controller';
import { AuthMiddleware } from "../user/auth.middleware";
import { UserModule } from "../user/user.module";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'BBS', schema: BBSSchema }]), UserModule],
  providers: [BbsService],
  controllers: [BbsController],
})
export class BbsModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      { path: 'bbs/new', method: RequestMethod.POST },
      { path: 'bbs/delete', method: RequestMethod.DELETE }
    )
  }
}
