import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoTypeWhereInput } from './video-type-where.input';

@InputType()
export class VideoTypeRelationFilter {
  @Field(() => VideoTypeWhereInput, { nullable: true })
  is?: VideoTypeWhereInput;

  @Field(() => VideoTypeWhereInput, { nullable: true })
  isNot?: VideoTypeWhereInput;
}
