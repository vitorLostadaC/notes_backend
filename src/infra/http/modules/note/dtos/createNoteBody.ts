import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateNoteBody {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}
