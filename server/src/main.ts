import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from "path";
import * as serveStatic from 'serve-static';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // cors
  app.enableCors({
    allowedHeaders:['Authorization']
  });
  // set static path like .png or .pdf
  app.use('/public',serveStatic(join(__dirname,'../public'),{
    // 设置http缓存
    maxAge:'1d',
    extensions: ['jpg', 'jpeg', 'png', 'gif'],
  }))
  await app.listen(6324);
}
bootstrap();
