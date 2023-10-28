import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '@/app.module';
import { env } from '@/env';

const bootstrap = async () => {
  const app = await NestFactory.create<INestApplication>(AppModule);
  await app.listen(env.PORT);
};

bootstrap();
