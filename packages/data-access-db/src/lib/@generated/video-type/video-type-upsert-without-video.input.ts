import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoTypeUpdateWithoutVideoInput } from './video-type-update-without-video.input';
import { Type } from 'class-transformer';
import { VideoTypeCreateWithoutVideoInput } from './video-type-create-without-video.input';
import { VideoTypeWhereInput } from './video-type-where.input';

@InputType()
export class VideoTypeUpsertWithoutVideoInput {
  @Field(() => VideoTypeUpdateWithoutVideoInput, { nullable: false })
  @Type(() => VideoTypeUpdateWithoutVideoInput)
  update!: VideoTypeUpdateWithoutVideoInput;

  @Field(() => VideoTypeCreateWithoutVideoInput, { nullable: false })
  @Type(() => VideoTypeCreateWithoutVideoInput)
  create!: VideoTypeCreateWithoutVideoInput;

  @Field(() => VideoTypeWhereInput, { nullable: true })
  @Type(() => VideoTypeWhereInput)
  where?: VideoTypeWhereInput;
}
