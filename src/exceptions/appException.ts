import { HttpException, HttpStatus } from '@nestjs/common';

export interface AppExceptionProps {
  message: string;
  status: HttpStatus;
  fields?: {
    [key: string]: string;
  };
}

export class AppException extends HttpException {
  constructor({ fields, message, status }: AppExceptionProps) {
    super(
      {
        message,
        fields,
      },
      status,
    );
  }
}
