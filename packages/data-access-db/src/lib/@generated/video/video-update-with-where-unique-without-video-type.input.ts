import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { Type } from 'class-transformer';
import { VideoUpdateWithoutVideoTypeInput } from './video-update-without-video-type.input';

@InputType()
export class VideoUpdateWithWhereUniqueWithoutVideoTypeInput {
  @Field(() => VideoWhereUniqueInput, { nullable: false })
  @Type(() => VideoWhereUniqueInput)
  where!: Prisma.AtLeast<VideoWhereUniqueInput, 'id' | 'userId_title'>;

  @Field(() => VideoUpdateWithoutVideoTypeInput, { nullable: false })
  @Type(() => VideoUpdateWithoutVideoTypeInput)
  data!: VideoUpdateWithoutVideoTypeInput;
}
