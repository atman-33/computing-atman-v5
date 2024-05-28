import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VideoUncheckedCreateNestedManyWithoutVideoTypeInput } from '../video/video-unchecked-create-nested-many-without-video-type.input';

@InputType()
export class VideoTypeUncheckedCreateInput {
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

  @Field(() => VideoUncheckedCreateNestedManyWithoutVideoTypeInput, { nullable: true })
  Video?: VideoUncheckedCreateNestedManyWithoutVideoTypeInput;
}
