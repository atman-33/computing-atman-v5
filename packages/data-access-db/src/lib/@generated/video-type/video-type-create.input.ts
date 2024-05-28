import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VideoCreateNestedManyWithoutVideoTypeInput } from '../video/video-create-nested-many-without-video-type.input';

@InputType()
export class VideoTypeCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Int, { nullable: false })
  sortOrder!: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;

  @Field(() => VideoCreateNestedManyWithoutVideoTypeInput, { nullable: true })
  Video?: VideoCreateNestedManyWithoutVideoTypeInput;
}
