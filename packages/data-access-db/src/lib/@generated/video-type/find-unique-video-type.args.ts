import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VideoTypeWhereUniqueInput } from './video-type-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class FindUniqueVideoTypeArgs {
  @Field(() => VideoTypeWhereUniqueInput, { nullable: false })
  @Type(() => VideoTypeWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<VideoTypeWhereUniqueInput, 'id' | 'name'>;
}
