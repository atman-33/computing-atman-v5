import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoWhereInput } from './video-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VideoOrderByWithRelationInput } from './video-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VideoWhereUniqueInput } from './video-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VideoScalarFieldEnum } from './video-scalar-field.enum';

@ArgsType()
export class FindFirstVideoOrThrowArgs {
  @Field(() => VideoWhereInput, { nullable: true })
  @Type(() => VideoWhereInput)
  @ValidateNested()
  where?: VideoWhereInput;

  @Field(() => [VideoOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<VideoOrderByWithRelationInput>;

  @Field(() => VideoWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<VideoWhereUniqueInput, 'id' | 'userId_title'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [VideoScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof VideoScalarFieldEnum>;
}
