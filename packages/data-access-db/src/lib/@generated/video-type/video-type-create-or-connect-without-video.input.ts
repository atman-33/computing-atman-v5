import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VideoTypeWhereUniqueInput } from './video-type-where-unique.input';
import { Type } from 'class-transformer';
import { VideoTypeCreateWithoutVideoInput } from './video-type-create-without-video.input';

@InputType()
export class VideoTypeCreateOrConnectWithoutVideoInput {
  @Field(() => VideoTypeWhereUniqueInput, { nullable: false })
  @Type(() => VideoTypeWhereUniqueInput)
  where!: Prisma.AtLeast<VideoTypeWhereUniqueInput, 'id' | 'name'>;

  @Field(() => VideoTypeCreateWithoutVideoInput, { nullable: false })
  @Type(() => VideoTypeCreateWithoutVideoInput)
  create!: VideoTypeCreateWithoutVideoInput;
}
