import { Request } from 'express';
export class AuthenticatedRequestModel extends Request {
  user: {
    id: string;
    email: string;
    name: string;
    createdAt: string;
  };
}
