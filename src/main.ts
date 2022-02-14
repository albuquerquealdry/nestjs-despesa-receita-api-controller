import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const trace = require ('../otel/tracing')

const { countAllRequests } = require("../otel/monitoring");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.use(countAllRequests())
  await app.listen(process.env.PORT || 3000);
}

bootstrap();