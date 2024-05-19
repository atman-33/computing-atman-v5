import { registerEnumType } from '@nestjs/graphql';

export enum VideoTypeScalarFieldEnum {
  id = 'id',
  name = 'name',
  sortOrder = 'sortOrder',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(VideoTypeScalarFieldEnum, {
  name: 'VideoTypeScalarFieldEnum',
  description: undefined,
});
