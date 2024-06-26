import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserUncheckedUpdateManyInput {
  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => String, { nullable: true })
  password?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
