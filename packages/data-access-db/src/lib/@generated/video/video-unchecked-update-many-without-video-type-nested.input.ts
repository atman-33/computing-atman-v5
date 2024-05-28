import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoCreateWithoutVideoTypeInput } from './video-create-without-video-type.input';
import { Type } from 'class-transformer';
import { VideoCreateOrConnectWithoutVideoTypeInput } from './video-create-or-connect-without-video-type.input';
import { VideoUpsertWithWhereUniqueWithoutVideoTypeInput } from './video-upsert-with-where-unique-without-video-type.input';
import { VideoCreateManyVideoTypeInputEnvelope } from './video-create-many-video-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { VideoUpdateWithWhereUniqueWithoutVideoTypeInput } from './video-update-with-where-unique-without-video-type.input';
import { VideoUpdateManyWithWhereWithoutVideoTypeInput } from './video-update-many-with-where-without-video-type.input';
import { VideoScalarWhereInput } from './video-scalar-where.input';

@InputType()
export class VideoUncheckedUpdateManyWithoutVideoTypeNestedInput {
  @Field(() => [VideoCreateWithoutVideoTypeInput], { nullable: true })
  @Type(() => VideoCreateWithoutVideoTypeInput)
  create?: Array<VideoCreateWithoutVideoTypeInput>;

  @Field(() => [VideoCreateOrConnectWithoutVideoTypeInput], { nullable: true })
  @Type(() => VideoCreateOrConnectWithoutVideoTypeInput)
  connectOrCreate?: Array<VideoCreateOrConnectWithoutVideoTypeInput>;

  @Field(() => [VideoUpsertWithWhereUniqueWithoutVideoTypeInput], { nullable: true })
  @Type(() => VideoUpsertWithWhereUniqueWithoutVideoTypeInput)
  upsert?: Array<VideoUpsertWithWhereUniqueWithoutVideoTypeInput>;

  @Field(() => VideoCreateManyVideoTypeInputEnvelope, { nullable: true })
  @Type(() => VideoCreateManyVideoTypeInputEnvelope)
  createMany?: VideoCreateManyVideoTypeInputEnvelope;

  @Field(() => [VideoWhereUniqueInput], { nullable: true })
  @Type(() => VideoWhereUniqueInput)
  set?: Array<Prisma.AtLeast<VideoWhereUniqueInput, 'id' | 'userId_title'>>;

  @Field(() => [VideoWhereUniqueInput], { nullable: true })
  @Type(() => VideoWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<VideoWhereUniqueInput, 'id' | 'userId_title'>>;

  @Field(() => [VideoWhereUniqueInput], { nullable: true })
  @Type(() => VideoWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<VideoWhereUniqueInput, 'id' | 'userId_title'>>;

  @Field(() => [VideoWhereUniqueInput], { nullable: true })
  @Type(() => VideoWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<VideoWhereUniqueInput, 'id' | 'userId_title'>>;

  @Field(() => [VideoUpdateWithWhereUniqueWithoutVideoTypeInput], { nullable: true })
  @Type(() => VideoUpdateWithWhereUniqueWithoutVideoTypeInput)
  update?: Array<VideoUpdateWithWhereUniqueWithoutVideoTypeInput>;

  @Field(() => [VideoUpdateManyWithWhereWithoutVideoTypeInput], { nullable: true })
  @Type(() => VideoUpdateManyWithWhereWithoutVideoTypeInput)
  updateMany?: Array<VideoUpdateManyWithWhereWithoutVideoTypeInput>;

  @Field(() => [VideoScalarWhereInput], { nullable: true })
  @Type(() => VideoScalarWhereInput)
  deleteMany?: Array<VideoScalarWhereInput>;
}
