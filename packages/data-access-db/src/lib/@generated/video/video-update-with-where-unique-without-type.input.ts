import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { Type } from 'class-transformer';
import { VideoUpdateWithoutTypeInput } from './video-update-without-type.input';

@InputType()
export class VideoUpdateWithWhereUniqueWithoutTypeInput {
  @Field(() => VideoWhereUniqueInput, { nullable: false })
  @Type(() => VideoWhereUniqueInput)
  where!: Prisma.AtLeast<VideoWhereUniqueInput, 'id' | 'userId_title'>;

  @Field(() => VideoUpdateWithoutTypeInput, { nullable: false })
  @Type(() => VideoUpdateWithoutTypeInput)
  data!: VideoUpdateWithoutTypeInput;
}
