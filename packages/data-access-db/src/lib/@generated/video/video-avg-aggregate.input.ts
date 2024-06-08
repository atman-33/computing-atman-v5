import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VideoAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  currentChapter?: true;

  @Field(() => Boolean, { nullable: true })
  score?: true;

  @Field(() => Boolean, { nullable: true })
  completed?: true;
}
