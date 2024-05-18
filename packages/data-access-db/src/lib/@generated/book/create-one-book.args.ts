import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookCreateInput } from './book-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneBookArgs {
  @Field(() => BookCreateInput, { nullable: false })
  @Type(() => BookCreateInput)
  @ValidateNested()
  data!: BookCreateInput;
}
