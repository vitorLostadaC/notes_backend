import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { NoteRepository } from '../../repositories/noteRepository';
import { NoteNotFoundException } from '../../exceptions/NoteNotFoundException';
import { NoteWithoutPermissionException } from '../../exceptions/NoteWithoutPermissionException';

interface DeleteNoteRequest {
  noteId: string;
  userId: string;
}

@Injectable()
export class DeleteNoteUseCase {
  constructor(private noteRepository: NoteRepository) {}

  async execute({ noteId, userId }: DeleteNoteRequest) {
    const note = await this.noteRepository.findById(noteId);

    if (!note) throw new NoteNotFoundException();

    if (note.userId !== userId)
      throw new NoteWithoutPermissionException({
        actionName: 'deletar',
      });

    await this.noteRepository.delete(noteId);
  }
}
