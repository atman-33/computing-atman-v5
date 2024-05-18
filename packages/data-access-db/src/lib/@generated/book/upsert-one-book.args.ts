import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BookWhereUniqueInput } from './book-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { BookCreateInput } from './book-create.input';
import { BookUpdateInput } from './book-update.input';

@ArgsType()
export class UpsertOneBookArgs {
  @Field(() => BookWhereUniqueInput, { nullable: false })
  @Type(() => BookWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<BookWhereUniqueInput, 'id' | 'userId_title'>;

  @Field(() => BookCreateInput, { nullable: false })
  @Type(() => BookCreateInput)
  create!: BookCreateInput;

  @Field(() => BookUpdateInput, { nullable: false })
  @Type(() => BookUpdateInput)
  update!: BookUpdateInput;
}
