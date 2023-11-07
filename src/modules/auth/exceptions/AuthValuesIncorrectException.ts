import { HttpStatus } from '@nestjs/common';
import { AppException } from 'src/exceptions/appException';

export class AuthValuesIncorrectException extends AppException {
  constructor() {
    super({
      message: 'Email ou senha incorretos',
      status: HttpStatus.UNAUTHORIZED,
    });
  }
}
