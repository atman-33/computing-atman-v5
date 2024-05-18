import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookUpdateManyMutationInput } from './book-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { BookWhereInput } from './book-where.input';

@ArgsType()
export class UpdateManyBookArgs {
  @Field(() => BookUpdateManyMutationInput, { nullable: false })
  @Type(() => BookUpdateManyMutationInput)
  @ValidateNested()
  data!: BookUpdateManyMutationInput;

  @Field(() => BookWhereInput, { nullable: true })
  @Type(() => BookWhereInput)
  @ValidateNested()
  where?: BookWhereInput;
}
