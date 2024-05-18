import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookWhereInput } from './book-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class DeleteManyBookArgs {
  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  @ValidateNested()
  where?: BookWhereInput;
}
