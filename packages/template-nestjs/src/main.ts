import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from '@/modules/app.module';
import { Env } from '@/common/env.validator';

async function bootstrap() {
  const app = await NestFactory.create<INestApplication>(AppModule);
  const env = app.get<Env>(ConfigService);
  await app.listen(env.PORT);
}

bootstrap();
