import { registerEnumType } from '@nestjs/graphql';

export enum BookScalarFieldEnum {
  id = 'id',
  title = 'title',
  currentChapter = 'currentChapter',
  score = 'score',
  completed = 'completed',
  review = 'review',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  userId = 'userId',
}

registerEnumType(BookScalarFieldEnum, { name: 'BookScalarFieldEnum', description: undefined });
