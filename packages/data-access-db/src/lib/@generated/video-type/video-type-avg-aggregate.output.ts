import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class VideoTypeAvgAggregate {
  @Field(() => Float, { nullable: true })
  sortOrder?: number;
}
