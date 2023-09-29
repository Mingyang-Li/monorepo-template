import { Module } from '@nestjs/common';
import { AppController } from '@/controllers/app.controller';
import { AppService } from '@/services/app.service';
import { ConfigModule } from '@nestjs/config';
import { validate } from '@/common/env.validator';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
