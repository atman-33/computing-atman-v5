import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VideoUpdateManyWithoutVideoTypeNestedInput } from '../video/video-update-many-without-video-type-nested.input';

@InputType()
export class VideoTypeUpdateInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => VideoUpdateManyWithoutVideoTypeNestedInput, { nullable: true })
  Video?: VideoUpdateManyWithoutVideoTypeNestedInput;
}
