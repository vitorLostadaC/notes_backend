import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CreateNoteUseCase } from 'src/modules/note/useCases/createNoteUseCase/createNoteUseCase';
import { DeleteNoteUseCase } from 'src/modules/note/useCases/deleteNoteUseCase/deleteNoteUseCase';
import { EditNoteUseCase } from 'src/modules/note/useCases/editNoteUseCase/editNoteUseCase';
import { GetManyNoteUseCase } from 'src/modules/note/useCases/getManyUseCase/getManyUseCase';
import { GetNoteUseCase } from 'src/modules/note/useCases/getNoteUseCase/getNoteUseCase';

@Module({
  imports: [DatabaseModule],
  controllers: [NoteController],
  providers: [
    CreateNoteUseCase,
    DeleteNoteUseCase,
    EditNoteUseCase,
    GetNoteUseCase,
    GetManyNoteUseCase,
  ],
})
export class NoteModule {}
