import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { Type } from 'class-transformer';
import { VideoCreateWithoutTypeInput } from './video-create-without-type.input';

@InputType()
export class VideoCreateOrConnectWithoutTypeInput {
  @Field(() => VideoWhereUniqueInput, { nullable: false })
  @Type(() => VideoWhereUniqueInput)
  where!: Prisma.AtLeast<VideoWhereUniqueInput, 'id' | 'userId_title'>;

  @Field(() => VideoCreateWithoutTypeInput, { nullable: false })
  @Type(() => VideoCreateWithoutTypeInput)
  create!: VideoCreateWithoutTypeInput;
}
