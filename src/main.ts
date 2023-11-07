import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { IncorrectValuesException } from './exceptions/IncorrectValuesException';
import { mapperClassValidationErrorToAppException } from './utils/mappers';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory(errors: ValidationError[]) {
        throw new IncorrectValuesException({
          fields: mapperClassValidationErrorToAppException(errors),
        });
      },
    }),
  );
  await app.listen(3002);
}

bootstrap();
