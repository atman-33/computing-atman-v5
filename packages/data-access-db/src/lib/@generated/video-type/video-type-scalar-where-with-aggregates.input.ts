import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class VideoTypeScalarWhereWithAggregatesInput {
  @Field(() => [VideoTypeScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<VideoTypeScalarWhereWithAggregatesInput>;

  @Field(() => [VideoTypeScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<VideoTypeScalarWhereWithAggregatesInput>;

  @Field(() => [VideoTypeScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<VideoTypeScalarWhereWithAggregatesInput>;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => IntWithAggregatesFilter, { nullable: true })
  sortOrder?: IntWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter;
}
