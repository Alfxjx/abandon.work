import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { BbsModule } from './bbs/bbs.module';
import { UserModule } from './user/user.module';
import { PictureModule } from './picture/picture.module';
// import { ServeStaticModule } from '@nestjs/serve-static';
// import { join } from 'path';
import { JuheModule } from './juhe/juhe.module';
import { OptionMiddleware } from "./shared/middlewares/option.middleware";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-blog', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'public'),
    // }),
    BlogModule,
    BbsModule,
    UserModule,
    PictureModule,
    JuheModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(OptionMiddleware).forRoutes('*')
  }
}
