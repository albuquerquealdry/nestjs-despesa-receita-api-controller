import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/node';

async function bootstrap() {
  Sentry.init({
    dsn: 'https://fabb3827a24b49dfa8cda39a176445c6@o1141802.ingest.sentry.io/6223109',
  });
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}

bootstrap();