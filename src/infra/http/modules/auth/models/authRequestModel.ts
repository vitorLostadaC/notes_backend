import { Request } from 'express';
import { User } from 'src/modules/user/entities/User';

export class AuthRequestModel extends Request {
  user: User;
}
