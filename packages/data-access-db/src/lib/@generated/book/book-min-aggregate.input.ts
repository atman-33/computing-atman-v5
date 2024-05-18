import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BookMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  id?: true;

  @Field(() => Boolean, { nullable: true })
  title?: true;

  @Field(() => Boolean, { nullable: true })
  currentChapter?: true;

  @Field(() => Boolean, { nullable: true })
  score?: true;

  @Field(() => Boolean, { nullable: true })
  completed?: true;

  @Field(() => Boolean, { nullable: true })
  review?: true;

  @Field(() => Boolean, { nullable: true })
  createdAt?: true;

  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;

  @Field(() => Boolean, { nullable: true })
  userId?: true;
}
