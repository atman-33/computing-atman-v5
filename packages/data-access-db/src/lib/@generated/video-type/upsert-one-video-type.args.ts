import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { VideoTypeWhereUniqueInput } from './video-type-where-unique.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VideoTypeCreateInput } from './video-type-create.input';
import { VideoTypeUpdateInput } from './video-type-update.input';

@ArgsType()
export class UpsertOneVideoTypeArgs {
  @Field(() => VideoTypeWhereUniqueInput, { nullable: false })
  @Type(() => VideoTypeWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<VideoTypeWhereUniqueInput, 'id' | 'name'>;

  @Field(() => VideoTypeCreateInput, { nullable: false })
  @Type(() => VideoTypeCreateInput)
  create!: VideoTypeCreateInput;

  @Field(() => VideoTypeUpdateInput, { nullable: false })
  @Type(() => VideoTypeUpdateInput)
  update!: VideoTypeUpdateInput;
}
