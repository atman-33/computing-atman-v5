import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoCreateWithoutTypeInput } from './video-create-without-type.input';
import { Type } from 'class-transformer';
import { VideoCreateOrConnectWithoutTypeInput } from './video-create-or-connect-without-type.input';
import { VideoCreateManyTypeInputEnvelope } from './video-create-many-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { VideoWhereUniqueInput } from './video-where-unique.input';

@InputType()
export class VideoCreateNestedManyWithoutTypeInput {
  @Field(() => [VideoCreateWithoutTypeInput], { nullable: true })
  @Type(() => VideoCreateWithoutTypeInput)
  create?: Array<VideoCreateWithoutTypeInput>;

  @Field(() => [VideoCreateOrConnectWithoutTypeInput], { nullable: true })
  @Type(() => VideoCreateOrConnectWithoutTypeInput)
  connectOrCreate?: Array<VideoCreateOrConnectWithoutTypeInput>;

  @Field(() => VideoCreateManyTypeInputEnvelope, { nullable: true })
  @Type(() => VideoCreateManyTypeInputEnvelope)
  createMany?: VideoCreateManyTypeInputEnvelope;

  @Field(() => [VideoWhereUniqueInput], { nullable: true })
  @Type(() => VideoWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<VideoWhereUniqueInput, 'id' | 'userId_title'>>;
}
