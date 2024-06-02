import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoTypeCreateWithoutVideoInput } from './video-type-create-without-video.input';
import { Type } from 'class-transformer';
import { VideoTypeCreateOrConnectWithoutVideoInput } from './video-type-create-or-connect-without-video.input';
import { Prisma } from '@prisma/client';
import { VideoTypeWhereUniqueInput } from './video-type-where-unique.input';

@InputType()
export class VideoTypeCreateNestedOneWithoutVideoInput {
  @Field(() => VideoTypeCreateWithoutVideoInput, { nullable: true })
  @Type(() => VideoTypeCreateWithoutVideoInput)
  create?: VideoTypeCreateWithoutVideoInput;

  @Field(() => VideoTypeCreateOrConnectWithoutVideoInput, { nullable: true })
  @Type(() => VideoTypeCreateOrConnectWithoutVideoInput)
  connectOrCreate?: VideoTypeCreateOrConnectWithoutVideoInput;

  @Field(() => VideoTypeWhereUniqueInput, { nullable: true })
  @Type(() => VideoTypeWhereUniqueInput)
  connect?: Prisma.AtLeast<VideoTypeWhereUniqueInput, 'id' | 'name'>;
}
