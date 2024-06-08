import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VideoTypeUpdateOneRequiredWithoutVideoNestedInput } from '../video-type/video-type-update-one-required-without-video-nested.input';

@InputType()
export class VideoUpdateInput {
  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => Float, { nullable: true })
  currentChapter?: number;

  @Field(() => Float, { nullable: true })
  score?: number;

  @Field(() => Int, { nullable: true })
  completed?: number;

  @Field(() => String, { nullable: true })
  review?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => VideoTypeUpdateOneRequiredWithoutVideoNestedInput, { nullable: true })
  videoType?: VideoTypeUpdateOneRequiredWithoutVideoNestedInput;
}
