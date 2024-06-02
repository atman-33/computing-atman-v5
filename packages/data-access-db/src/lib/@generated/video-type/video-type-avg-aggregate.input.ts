import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VideoTypeAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  sortOrder?: true;
}
