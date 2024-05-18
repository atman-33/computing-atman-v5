import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookUserIdTitleCompoundUniqueInput } from './book-user-id-title-compound-unique.input';
import { BookWhereInput } from './book-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BookWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => BookUserIdTitleCompoundUniqueInput, { nullable: true })
  userId_title?: BookUserIdTitleCompoundUniqueInput;

  @Field(() => [BookWhereInput], { nullable: true })
  AND?: Array<BookWhereInput>;

  @Field(() => [BookWhereInput], { nullable: true })
  OR?: Array<BookWhereInput>;

  @Field(() => [BookWhereInput], { nullable: true })
  NOT?: Array<BookWhereInput>;

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
