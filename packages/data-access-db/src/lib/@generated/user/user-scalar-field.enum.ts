import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
  id = 'id',
  username = 'username',
  password = 'password',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined });
