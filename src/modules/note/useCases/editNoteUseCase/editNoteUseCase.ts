import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { NoteRepository } from '../../repositories/noteRepository';

interface EditNoteRequest {
  title: string;
  description?: string;
  noteId: string;
  userId: string;
}

@Injectable()
export class EditNoteUseCase {
  constructor(private noteRepository: NoteRepository) {}

  async execute({ description, noteId, title, userId }: EditNoteRequest) {
    const note = await this.noteRepository.findById(noteId);

    if (!note) throw new NotFoundException();

    if (note.userId !== userId) throw new UnauthorizedException();

    note.title = title;
    note.description = description ?? null;

    await this.noteRepository.save(note);

    return note;
  }
}
