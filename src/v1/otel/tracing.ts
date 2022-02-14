const opentelemetry = require("@opentelemetry/sdk-node");
const { ZipkinExporter } = require("@opentelemetry/exporter-zipkin");
const { NodeTracerProvider } = require('@opentelemetry/node')
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const { BatchSpanProcessor } = require("@opentelemetry/sdk-trace-base");
const {LogLevel} = require('@opentelemetry/core')
const {SimpleSpanProcessor, BasicTracerProvider} = require ('@opentelemetry/tracing')
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');


const sdk = new opentelemetry.NodeSDK({
  traceExporter: new opentelemetry.tracing.ConsoleSpanExporter(),
  instrumentations: [getNodeAutoInstrumentations()]
});

sdk.start()
const provider = new BasicTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: (`${process.env.APPLICATION_NAME}`|| "ms-dreams-lucid"),
    
  }),
});
console.log('TRACING START')
provider.register()
provider.addSpanProcessor(new SimpleSpanProcessor(new ZipkinExporter()))
