import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const trace = require ('../tracing')
const { ZipkinExporter } = require("@opentelemetry/exporter-zipkin");
const { BatchSpanProcessor } = require("@opentelemetry/sdk-trace-base");
const { countAllRequests } = require("../otel/monitoring");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.use(countAllRequests())
  await app.listen(process.env.PORT || 3000);
}

bootstrap();