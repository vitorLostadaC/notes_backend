import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { NoteRepository } from '../../repositories/noteRepository';
import { NoteNotFoundException } from '../../exceptions/NoteNotFoundException';
import { NoteWithoutPermissionException } from '../../exceptions/NoteWithoutPermissionException';

interface GetNoteRequest {
  noteId: string;
  userId: string;
}

@Injectable()
export class GetNoteUseCase {
  constructor(private noteRepository: NoteRepository) {}

  async execute({ noteId, userId }: GetNoteRequest) {
    const note = await this.noteRepository.findById(noteId);

    if (!note) throw new NoteNotFoundException();

    if (note.userId !== userId)
      throw new NoteWithoutPermissionException({
        actionName: 'recuperar',
      });

    return note;
  }
}
