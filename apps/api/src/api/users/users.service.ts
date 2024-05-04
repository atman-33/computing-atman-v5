import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from '@repo/data-access-db';
import * as bcrypt from 'bcrypt';
import { GetUserArgs } from './dto/args/get-user-args.dto';
import { CreateUserInput } from './dto/input/create-user-input.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserData: CreateUserInput) {
    await this.validateCreateUserData(createUserData);
    const userData = {
      ...createUserData.data,
      password: await bcrypt.hash(createUserData.data.password, 10),
    };
    return await this.prisma.user.create({
      data: userData,
    });
  }

  private async validateCreateUserData(createUserData: CreateUserInput) {
    const user = await this.prisma.user.findUnique({
      where: { username: createUserData.data.username },
    });

    if (user) {
      throw new UnprocessableEntityException('Username already exists.');
    }
  }

  async getUser(getUserArgs: GetUserArgs) {
    return await this.prisma.user.findUnique({
      where: getUserArgs.where,
    });
  }

  async validateUser(username: string, password: string) {
    const user = await this.prisma.user.findUnique({ where: { username } });
    const passwordIsValid = await bcrypt.compare(
      password,
      user === null ? '' : user.password,
    );
    if (!passwordIsValid) {
      throw new UnauthorizedException('Username or password is incorrect.');
    }
    return user;
  }
}
