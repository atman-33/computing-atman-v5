import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { Type } from 'class-transformer';
import { VideoCreateWithoutVideoTypeInput } from './video-create-without-video-type.input';

@InputType()
export class VideoCreateOrConnectWithoutVideoTypeInput {
  @Field(() => VideoWhereUniqueInput, { nullable: false })
  @Type(() => VideoWhereUniqueInput)
  where!: Prisma.AtLeast<VideoWhereUniqueInput, 'id' | 'userId_title'>;

  @Field(() => VideoCreateWithoutVideoTypeInput, { nullable: false })
  @Type(() => VideoCreateWithoutVideoTypeInput)
  create!: VideoCreateWithoutVideoTypeInput;
}
