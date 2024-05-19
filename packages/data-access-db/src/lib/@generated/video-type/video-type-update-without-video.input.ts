import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class VideoTypeUpdateWithoutVideoInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}
