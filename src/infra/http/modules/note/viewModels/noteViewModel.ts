import { Note } from '../../../../../modules/note/entities/note';
export class NoteViewModel {
  static toHtpp({ id, title, description, createdAt }: Note) {
    return {
      id,
      title,
      description,
      createdAt,
    };
  }
}
