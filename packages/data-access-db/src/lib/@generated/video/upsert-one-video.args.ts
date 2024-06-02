import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VideoCreateInput } from './video-create.input';
import { VideoUpdateInput } from './video-update.input';

@ArgsType()
export class UpsertOneVideoArgs {
  @Field(() => VideoWhereUniqueInput, { nullable: false })
  @Type(() => VideoWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<VideoWhereUniqueInput, 'id' | 'userId_title'>;

  @Field(() => VideoCreateInput, { nullable: false })
  @Type(() => VideoCreateInput)
  create!: VideoCreateInput;

  @Field(() => VideoUpdateInput, { nullable: false })
  @Type(() => VideoUpdateInput)
  update!: VideoUpdateInput;
}
