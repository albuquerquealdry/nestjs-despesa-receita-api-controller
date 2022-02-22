const { MeterProvider } = require('@opentelemetry/sdk-metrics-base');
const { PrometheusExporter } = require('@opentelemetry/exporter-prometheus');
<<<<<<< HEAD
=======

const exporter = new PrometheusExporter(
  {
    startServer: true,
  },
  () => {
    console.log(
      `prometheus scrape endpoint: http://onecatalogapp.com:${PrometheusExporter.DEFAULT_OPTIONS.port}${PrometheusExporter.DEFAULT_OPTIONS.endpoint}`,
    );
  },
);
>>>>>>> ffe2d885a7683a3683bd130fc35ce61fe6c84870

const exporter = new PrometheusExporter(
  {
    startServer: true,
  },
  () => {
    console.log(
      `prometheus scrape endpoint: http://localhost:${PrometheusExporter.DEFAULT_OPTIONS.port}${PrometheusExporter.DEFAULT_OPTIONS.endpoint}`,
    );
  },
);
const meter = new MeterProvider({
  exporter,
  interval: 1000,
}).getMeter('example-prometheus');

const requestCounter = meter.createCounter('requests', {
  description: 'Example of a Counter',
});

const upDownCounter = meter.createUpDownCounter('test_up_down_counter', {
  description: 'Example of a UpDownCounter',
});

const labels = { pid: process.pid, environment: 'staging' };

setInterval(() => {
  requestCounter.add(1, labels);
  upDownCounter.add(Math.random() > 0.5 ? 1 : -1, labels);
<<<<<<< HEAD
}, 1000);
=======
}, 1000);
>>>>>>> ffe2d885a7683a3683bd130fc35ce61fe6c84870
