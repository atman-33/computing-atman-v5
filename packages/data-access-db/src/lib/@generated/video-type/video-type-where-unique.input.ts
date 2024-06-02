import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoTypeWhereInput } from './video-type-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { VideoListRelationFilter } from '../video/video-list-relation-filter.input';

@InputType()
export class VideoTypeWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => [VideoTypeWhereInput], { nullable: true })
  AND?: Array<VideoTypeWhereInput>;

  @Field(() => [VideoTypeWhereInput], { nullable: true })
  OR?: Array<VideoTypeWhereInput>;

  @Field(() => [VideoTypeWhereInput], { nullable: true })
  NOT?: Array<VideoTypeWhereInput>;

  @Field(() => IntFilter, { nullable: true })
  sortOrder?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => VideoListRelationFilter, { nullable: true })
  Video?: VideoListRelationFilter;
}
