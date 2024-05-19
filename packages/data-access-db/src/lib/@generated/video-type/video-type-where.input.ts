import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { VideoListRelationFilter } from '../video/video-list-relation-filter.input';

@InputType()
export class VideoTypeWhereInput {
  @Field(() => [VideoTypeWhereInput], { nullable: true })
  AND?: Array<VideoTypeWhereInput>;

  @Field(() => [VideoTypeWhereInput], { nullable: true })
  OR?: Array<VideoTypeWhereInput>;

  @Field(() => [VideoTypeWhereInput], { nullable: true })
  NOT?: Array<VideoTypeWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => IntFilter, { nullable: true })
  sortOrder?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => VideoListRelationFilter, { nullable: true })
  Video?: VideoListRelationFilter;
}
