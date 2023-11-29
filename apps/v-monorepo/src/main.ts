import {
  BadRequestException,
  Logger,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import HttpExceptionFilter from './infrastructure/exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.useLogger(new Logger());
  app.setGlobalPrefix(globalPrefix);
  app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException(validationErrors);
      },
    })
  );

  app.enableCors({
    origin: ['*'],
    methods: ['*'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  await app.listen(5555);
}

bootstrap();
