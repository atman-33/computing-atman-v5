import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoCreateWithoutVideoTypeInput } from './video-create-without-video-type.input';
import { Type } from 'class-transformer';
import { VideoCreateOrConnectWithoutVideoTypeInput } from './video-create-or-connect-without-video-type.input';
import { VideoCreateManyVideoTypeInputEnvelope } from './video-create-many-video-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VideoWhereUniqueInput } from './video-where-unique.input';

@InputType()
export class VideoUncheckedCreateNestedManyWithoutVideoTypeInput {
  @Field(() => [VideoCreateWithoutVideoTypeInput], { nullable: true })
  @Type(() => VideoCreateWithoutVideoTypeInput)
  create?: Array<VideoCreateWithoutVideoTypeInput>;

  @Field(() => [VideoCreateOrConnectWithoutVideoTypeInput], { nullable: true })
  @Type(() => VideoCreateOrConnectWithoutVideoTypeInput)
  connectOrCreate?: Array<VideoCreateOrConnectWithoutVideoTypeInput>;

  @Field(() => VideoCreateManyVideoTypeInputEnvelope, { nullable: true })
  @Type(() => VideoCreateManyVideoTypeInputEnvelope)
  createMany?: VideoCreateManyVideoTypeInputEnvelope;

  @Field(() => [VideoWhereUniqueInput], { nullable: true })
  @Type(() => VideoWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<VideoWhereUniqueInput, 'id' | 'userId_title'>>;
}
