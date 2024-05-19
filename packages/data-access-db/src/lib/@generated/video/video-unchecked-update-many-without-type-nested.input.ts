import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoCreateWithoutTypeInput } from './video-create-without-type.input';
import { Type } from 'class-transformer';
import { VideoCreateOrConnectWithoutTypeInput } from './video-create-or-connect-without-type.input';
import { VideoUpsertWithWhereUniqueWithoutTypeInput } from './video-upsert-with-where-unique-without-type.input';
import { VideoCreateManyTypeInputEnvelope } from './video-create-many-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { VideoUpdateWithWhereUniqueWithoutTypeInput } from './video-update-with-where-unique-without-type.input';
import { VideoUpdateManyWithWhereWithoutTypeInput } from './video-update-many-with-where-without-type.input';
import { VideoScalarWhereInput } from './video-scalar-where.input';

@InputType()
export class VideoUncheckedUpdateManyWithoutTypeNestedInput {
  @Field(() => [VideoCreateWithoutTypeInput], { nullable: true })
  @Type(() => VideoCreateWithoutTypeInput)
  create?: Array<VideoCreateWithoutTypeInput>;

  @Field(() => [VideoCreateOrConnectWithoutTypeInput], { nullable: true })
  @Type(() => VideoCreateOrConnectWithoutTypeInput)
  connectOrCreate?: Array<VideoCreateOrConnectWithoutTypeInput>;

  @Field(() => [VideoUpsertWithWhereUniqueWithoutTypeInput], { nullable: true })
  @Type(() => VideoUpsertWithWhereUniqueWithoutTypeInput)
  upsert?: Array<VideoUpsertWithWhereUniqueWithoutTypeInput>;

  @Field(() => VideoCreateManyTypeInputEnvelope, { nullable: true })
  @Type(() => VideoCreateManyTypeInputEnvelope)
  createMany?: VideoCreateManyTypeInputEnvelope;

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

  @Field(() => [VideoUpdateWithWhereUniqueWithoutTypeInput], { nullable: true })
  @Type(() => VideoUpdateWithWhereUniqueWithoutTypeInput)
  update?: Array<VideoUpdateWithWhereUniqueWithoutTypeInput>;

  @Field(() => [VideoUpdateManyWithWhereWithoutTypeInput], { nullable: true })
  @Type(() => VideoUpdateManyWithWhereWithoutTypeInput)
  updateMany?: Array<VideoUpdateManyWithWhereWithoutTypeInput>;

  @Field(() => [VideoScalarWhereInput], { nullable: true })
  @Type(() => VideoScalarWhereInput)
  deleteMany?: Array<VideoScalarWhereInput>;
}
