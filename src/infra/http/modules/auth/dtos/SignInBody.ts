import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class SignInBody {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
