import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BookWhereInput {
  @Field(() => [BookWhereInput], { nullable: true })
  AND?: Array<BookWhereInput>;

  @Field(() => [BookWhereInput], { nullable: true })
  OR?: Array<BookWhereInput>;

  @Field(() => [BookWhereInput], { nullable: true })
  NOT?: Array<BookWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  id?: StringFilter;

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
}
