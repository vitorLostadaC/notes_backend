import { User } from 'src/modules/user/entities/User';
import { ValidateUserUseCase } from './validateUserUseCase';
import { UserRepositoryInMemory } from 'src/modules/user/repositories/UserRepositoryInMemory';
import { hash } from 'bcrypt';
import { makeUser } from 'src/modules/user/factories/userFactory';
import { UnauthorizedException } from '@nestjs/common';
import { AuthValuesIncorrectException } from '../../exceptions/AuthValuesIncorrectException';

let validateUserUseCase: ValidateUserUseCase;
let userRepositoryInMemory: UserRepositoryInMemory;

describe('Validate User', () => {
  beforeEach(() => {
    userRepositoryInMemory = new UserRepositoryInMemory();
    validateUserUseCase = new ValidateUserUseCase(userRepositoryInMemory);
  });

  it('Should be able to return user when credentials are correct', async () => {
    const userPasswordWithoutEncryption = '123123';

    const user = makeUser({
      password: await hash(userPasswordWithoutEncryption, 10),
    });

    userRepositoryInMemory.users = [user];

    const result = await validateUserUseCase.execute({
      email: user.email,
      password: userPasswordWithoutEncryption,
    });

    expect(result).toEqual(user);
  });

  it('Should be able to throw error when credentials incorrect', async () => {
    const userPasswordWithoutEncryption = '123123';

    const user = makeUser({
      password: await hash(userPasswordWithoutEncryption, 10),
    });

    userRepositoryInMemory.users = [user];

    expect(async () => {
      await validateUserUseCase.execute({
        email: 'incorrect@gmail.com',
        password: userPasswordWithoutEncryption,
      });
    }).rejects.toThrow(AuthValuesIncorrectException);

    expect(async () => {
      await validateUserUseCase.execute({
        email: user.email,
        password: 'incorrect password',
      });
    }).rejects.toThrow(AuthValuesIncorrectException);
  });
});
