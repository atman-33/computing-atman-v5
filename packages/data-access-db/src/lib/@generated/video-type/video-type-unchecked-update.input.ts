import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VideoUncheckedUpdateManyWithoutVideoTypeNestedInput } from '../video/video-unchecked-update-many-without-video-type-nested.input';

@InputType()
export class VideoTypeUncheckedUpdateInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  sortOrder?: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => VideoUncheckedUpdateManyWithoutVideoTypeNestedInput, { nullable: true })
  Video?: VideoUncheckedUpdateManyWithoutVideoTypeNestedInput;
}
