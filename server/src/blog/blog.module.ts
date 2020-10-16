import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogSchema } from './schemas/blog.schema';
import { AuthMiddleware } from '../user/auth.middleware';
// @NOTE to use auth, the userModule need to be imported.
import { UserModule } from "../user/user.module";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: BlogSchema }]),UserModule],
  providers: [BlogService],
  controllers: [BlogController],
})
export class BlogModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(
      { path: 'blog', method: RequestMethod.POST },
      { path: 'blog/edit', method: RequestMethod.PATCH },
      { path: 'blog/delete', method: RequestMethod.DELETE },
      { path: 'blog/like/:postID', method: RequestMethod.POST }
    )
  }
}
