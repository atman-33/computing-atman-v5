import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoTypeWhereInput } from './video-type-where.input';
import { Type } from 'class-transformer';
import { VideoTypeUpdateWithoutVideoInput } from './video-type-update-without-video.input';

@InputType()
export class VideoTypeUpdateToOneWithWhereWithoutVideoInput {
  @Field(() => VideoTypeWhereInput, { nullable: true })
  @Type(() => VideoTypeWhereInput)
  where?: VideoTypeWhereInput;

  @Field(() => VideoTypeUpdateWithoutVideoInput, { nullable: false })
  @Type(() => VideoTypeUpdateWithoutVideoInput)
  data!: VideoTypeUpdateWithoutVideoInput;
}
