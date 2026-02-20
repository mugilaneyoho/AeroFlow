/* eslint-disable @typescript-eslint/no-unsafe-call */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createProxyMiddleware } from 'http-proxy-middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    '/auth',
    createProxyMiddleware({
      target: 'http://localhost:3002',
      changeOrigin: true,
      pathRewrite: {
        '^/auth': '',
      },
    }),
  );

  app.use(
    '/institute',
    createProxyMiddleware({
      target: 'http://localhost:3004',
      changeOrigin: true,
      pathRewrite: {
        '^/institute': '',
      },
    }),
  );

  app.use(
    '/telecalling',
    createProxyMiddleware({
      target: 'http://localhost:3006',
      changeOrigin: true,
      pathRewrite: {
        '^/telecalling': '',
      },
    }),
  );

  app.use(
    '/training',
    createProxyMiddleware({
      target: 'http://localhost:3008',
      changeOrigin: true,
      pathRewrite: {
        '^/training': '',
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
