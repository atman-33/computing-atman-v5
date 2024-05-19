import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoTypeUpdateInput } from './video-type-update.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Prisma } from '@prisma/client';
import { VideoTypeWhereUniqueInput } from './video-type-where-unique.input';

@ArgsType()
export class UpdateOneVideoTypeArgs {
  @Field(() => VideoTypeUpdateInput, { nullable: false })
  @Type(() => VideoTypeUpdateInput)
  @ValidateNested()
  data!: VideoTypeUpdateInput;

  @Field(() => VideoTypeWhereUniqueInput, { nullable: false })
  @Type(() => VideoTypeWhereUniqueInput)
  @ValidateNested()
  where!: Prisma.AtLeast<VideoTypeWhereUniqueInput, 'id' | 'name'>;
}
