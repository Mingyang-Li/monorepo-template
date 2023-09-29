import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/modules/app.module';
import { ConfigService } from '@nestjs/config';
import { Env } from './common/env.validator';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<INestApplication>(AppModule);
  const env = app.get<Env>(ConfigService);
  await app.listen(env.PORT);
}

bootstrap();
