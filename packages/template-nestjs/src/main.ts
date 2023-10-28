import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '@/modules/app.module';
import { env } from '@/env';

async function bootstrap() {
  const app = await NestFactory.create<INestApplication>(AppModule);
  // const env = app.get<Env>(ConfigService);
  console.table(env);
  await app.listen(env.PORT);
}

bootstrap();
