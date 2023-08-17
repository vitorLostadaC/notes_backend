import { Note } from '../entities/note';

type Override = Partial<Note>;

export const makeNote = ({ id, ...override }: Override) => {
  return new Note(
    {
      title: 'Dar like no video',
      userId: '123123',
      description: 'Se inscreva no canal',
      ...override,
    },
    id,
  );
};
