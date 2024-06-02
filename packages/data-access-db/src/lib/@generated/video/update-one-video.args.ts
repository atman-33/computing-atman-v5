import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoUpdateInput } from './video-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { VideoWhereUniqueInput } from './video-where-unique.input';

@ArgsType()
export class UpdateOneVideoArgs {
  @Field(() => VideoUpdateInput, { nullable: false })
  @Type(() => VideoUpdateInput)
  @ValidateNested()
  data!: VideoUpdateInput;

  @Field(() => VideoWhereUniqueInput, { nullable: false })
  @Type(() => VideoWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<VideoWhereUniqueInput, 'id' | 'userId_title'>;
}
