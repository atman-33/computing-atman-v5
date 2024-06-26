import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoUserIdTitleCompoundUniqueInput } from './video-user-id-title-compound-unique.input';
import { VideoWhereInput } from './video-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { VideoTypeRelationFilter } from '../video-type/video-type-relation-filter.input';

@InputType()
export class VideoWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => VideoUserIdTitleCompoundUniqueInput, { nullable: true })
  userId_title?: VideoUserIdTitleCompoundUniqueInput;

  @Field(() => [VideoWhereInput], { nullable: true })
  AND?: Array<VideoWhereInput>;

  @Field(() => [VideoWhereInput], { nullable: true })
  OR?: Array<VideoWhereInput>;

  @Field(() => [VideoWhereInput], { nullable: true })
  NOT?: Array<VideoWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  title?: StringFilter;

  @Field(() => FloatFilter, { nullable: true })
  currentChapter?: FloatFilter;

  @Field(() => FloatFilter, { nullable: true })
  score?: FloatFilter;

  @Field(() => IntFilter, { nullable: true })
  completed?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  review?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter;

  @Field(() => StringFilter, { nullable: true })
  userId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  videoTypeId?: StringFilter;

  @Field(() => VideoTypeRelationFilter, { nullable: true })
  videoType?: VideoTypeRelationFilter;
}
