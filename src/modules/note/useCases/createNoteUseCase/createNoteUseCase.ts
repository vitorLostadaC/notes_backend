import { Injectable } from '@nestjs/common';
import { Note } from '../../entities/note';
import { NoteRepository } from '../../repositories/noteRepository';

interface CreateNoteRequest {
  title: string;
  description?: string;
  userId: string;
}

@Injectable()
export class CreateNoteUseCase {
  constructor(private noteRepository: NoteRepository) {}

  async execute({ title, userId, description }: CreateNoteRequest) {
    const note = new Note({
      title,
      description,
      userId,
    });

    await this.noteRepository.create(note);

    return note;
  }
}
