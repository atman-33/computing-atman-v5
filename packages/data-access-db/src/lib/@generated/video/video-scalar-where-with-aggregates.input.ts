import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class VideoScalarWhereWithAggregatesInput {
  @Field(() => [VideoScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<VideoScalarWhereWithAggregatesInput>;

  @Field(() => [VideoScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<VideoScalarWhereWithAggregatesInput>;

  @Field(() => [VideoScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<VideoScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: StringWithAggregatesFilter;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  currentChapter?: FloatWithAggregatesFilter;

  @Field(() => FloatWithAggregatesFilter, { nullable: true })
  score?: FloatWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  completed?: IntWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  review?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  videoTypeId?: StringWithAggregatesFilter;
}
