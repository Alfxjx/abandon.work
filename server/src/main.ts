import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as serveStatic from 'serve-static';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // cors
  app.enableCors({
    allowedHeaders: 'Authorization',
    preflightContinue: false,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    origin: [
      'http://www.abandon.work/api',
      'http://localhost:6000',
      'http://localhost:3000',
    ],
  });
  // set static path like .png or .pdf
  app.use(
    '/public',
    serveStatic(join(__dirname, '../public'), {
      // 设置http缓存
      maxAge: '1d',
      extensions: ['jpg', 'jpeg', 'png', 'gif'],
    }),
  );
  const options = new DocumentBuilder()
    .setTitle('Blog example')
    .setDescription('The Blog API description')
    .setVersion('1.0')
    .addTag('dev')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  // TODO port???
  await app.listen(6000);
}
bootstrap();
