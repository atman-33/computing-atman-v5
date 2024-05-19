import { registerEnumType } from '@nestjs/graphql';

export enum VideoScalarFieldEnum {
  id = 'id',
  title = 'title',
  currentChapter = 'currentChapter',
  score = 'score',
  completed = 'completed',
  review = 'review',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  userId = 'userId',
  videoTypeId = 'videoTypeId',
}

registerEnumType(VideoScalarFieldEnum, { name: 'VideoScalarFieldEnum', description: undefined });
