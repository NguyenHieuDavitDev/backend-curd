// api/index.ts
import { createServer, proxy } from 'aws-serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express'; 
import { AppModule } from '../src/app.module';

let cachedServer: Handler;

async function bootstrap(): Promise<Handler> {
  // Tạo một instance Express
  const expressApp = express();
  // Khởi tạo Nest trên adapter Express
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressApp),
  );
  await app.init();
  // Tạo server Lambda proxy
  return createServer(expressApp);
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  if (!cachedServer) {
    cachedServer = await bootstrap();
  }
  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
