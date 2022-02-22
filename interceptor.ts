import {
    ExecutionContext,
    Injectable,
    NestInterceptor,
    CallHandler,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { tap } from 'rxjs/operators';
  import * as Sentry from '@sentry/minimal';
  const { countAllRequests } = require("./src/v1/otel/monitoring");
  const trace = require ('./src/v1/otel/tracing')
  @Injectable()
  export class SentryInterceptor implements NestInterceptor {
    
    intercept( context: ExecutionContext, next: CallHandler): Observable<any> {

      return next
        .handle()
        .pipe(
          tap(null, (exception) => {
            Sentry.captureException(exception);
          }),
        );
    }
  
  }