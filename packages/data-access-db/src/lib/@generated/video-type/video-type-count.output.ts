import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VideoTypeCount {
  @Field(() => Int, { nullable: false })
  Video?: number;
}
