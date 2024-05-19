import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VideoUpdateManyWithoutTypeNestedInput } from '../video/video-update-many-without-type-nested.input';

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

  @Field(() => VideoUpdateManyWithoutTypeNestedInput, { nullable: true })
  Video?: VideoUpdateManyWithoutTypeNestedInput;
}
