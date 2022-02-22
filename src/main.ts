import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
<<<<<<< HEAD
import * as Sentry from '@sentry/node';
=======
const trace = require ('./v1/otel/tracing')
const { countAllRequests } = require("./v1/otel/monitoring");
>>>>>>> ffe2d885a7683a3683bd130fc35ce61fe6c84870

async function bootstrap() {
  Sentry.init({
    dsn: 'https://fabb3827a24b49dfa8cda39a176445c6@o1141802.ingest.sentry.io/6223109',
  });
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}

bootstrap();