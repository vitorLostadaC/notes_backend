import { IsEmailCustom } from 'src/infra/http/classValidator/decorators/IsEmailCustom';
import { IsNotEmptyCustom } from 'src/infra/http/classValidator/decorators/IsNotEmptyCustom';
import { IsStringCustom } from 'src/infra/http/classValidator/decorators/IsStringCustom';
import { MinLengthCustom } from 'src/infra/http/classValidator/decorators/MinLengthCustom';

export class CreateUserBody {
  @IsStringCustom()
  @IsNotEmptyCustom()
  @IsEmailCustom()
  email: string;

  @IsStringCustom()
  @IsNotEmptyCustom()
  name: string;

  @IsStringCustom()
  @IsNotEmptyCustom()
  @MinLengthCustom(6)
  password: string;
}
