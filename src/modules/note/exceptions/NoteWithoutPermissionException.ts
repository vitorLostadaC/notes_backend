import { HttpStatus } from '@nestjs/common';
import { AppException } from 'src/exceptions/appException';

interface NoteWithoutPermissionExceptionProps {
  actionName: string;
}

export class NoteWithoutPermissionException extends AppException {
  constructor({ actionName }: NoteWithoutPermissionExceptionProps) {
    super({
      message: `Sem permissão para ${actionName} anotação`,
      status: HttpStatus.UNAUTHORIZED,
    });
  }
}
