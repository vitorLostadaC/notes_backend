import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class EditNoteBody {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}
