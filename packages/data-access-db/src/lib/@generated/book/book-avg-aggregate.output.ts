import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BookAvgAggregate {
  @Field(() => Float, { nullable: true })
  currentChapter?: number;

  @Field(() => Float, { nullable: true })
  score?: number;

  @Field(() => Float, { nullable: true })
  completed?: number;
}
