import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { VideoTypesService } from './api/video-types/video-types.service';
import { AppModule } from './app.module';
import { apiEnv } from './config/api-env';

async function bootstrap() {
  console.log(`api process.cwd: ${process.cwd()}`);

  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());

  // DB初期化
  await initialize(app);

  const port = apiEnv.API_PORT || 3000;
  app.enableCors({
    origin: [
      apiEnv.WEB_ORIGIN || 'http://localhost:4200',
      `http://localhost:${port}`,
    ],
    credentials: true,
  });

  await app.listen(port);
  Logger.log(
    `🚀 Application playground is running on: http://localhost:${port}/api/graphql`,
  );
}

bootstrap();

/**
 * DB初期化
 * @param app
 */
async function initialize(app: INestApplication<any>) {
  const videoTypesService = app.get(VideoTypesService);
  await videoTypesService.initialize();
  console.log('📀 initialized DB data done.');
}
