import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class FindUniqueVideoArgs {
  @Field(() => VideoWhereUniqueInput, { nullable: false })
  @Type(() => VideoWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<VideoWhereUniqueInput, 'id' | 'userId_title'>;
}
