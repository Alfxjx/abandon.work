import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { BbsController } from './bbs/bbs.controller';
import { BbsService } from './bbs/bbs.service';
import { BbsModule } from './bbs/bbs.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-blog', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    BlogModule,
    BbsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
