import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoTypeWhereInput } from './video-type-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VideoTypeOrderByWithRelationInput } from './video-type-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VideoTypeWhereUniqueInput } from './video-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VideoTypeScalarFieldEnum } from './video-type-scalar-field.enum';

@ArgsType()
export class FindFirstVideoTypeOrThrowArgs {
  @Field(() => VideoTypeWhereInput, { nullable: true })
  @Type(() => VideoTypeWhereInput)
  @ValidateNested()
  where?: VideoTypeWhereInput;

  @Field(() => [VideoTypeOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<VideoTypeOrderByWithRelationInput>;

  @Field(() => VideoTypeWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<VideoTypeWhereUniqueInput, 'id' | 'name'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [VideoTypeScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof VideoTypeScalarFieldEnum>;
}
