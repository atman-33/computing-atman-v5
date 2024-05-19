import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VideoTypeSumAggregate {
  @Field(() => Int, { nullable: true })
  sortOrder?: number;
}
