import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoTypeWhereInput } from './video-type-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VideoTypeOrderByWithRelationInput } from './video-type-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VideoTypeWhereUniqueInput } from './video-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VideoTypeCountAggregateInput } from './video-type-count-aggregate.input';
import { VideoTypeAvgAggregateInput } from './video-type-avg-aggregate.input';
import { VideoTypeSumAggregateInput } from './video-type-sum-aggregate.input';
import { VideoTypeMinAggregateInput } from './video-type-min-aggregate.input';
import { VideoTypeMaxAggregateInput } from './video-type-max-aggregate.input';

@ArgsType()
export class VideoTypeAggregateArgs {
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

  @Field(() => VideoTypeCountAggregateInput, { nullable: true })
  _count?: VideoTypeCountAggregateInput;

  @Field(() => VideoTypeAvgAggregateInput, { nullable: true })
  _avg?: VideoTypeAvgAggregateInput;

  @Field(() => VideoTypeSumAggregateInput, { nullable: true })
  _sum?: VideoTypeSumAggregateInput;

  @Field(() => VideoTypeMinAggregateInput, { nullable: true })
  _min?: VideoTypeMinAggregateInput;

  @Field(() => VideoTypeMaxAggregateInput, { nullable: true })
  _max?: VideoTypeMaxAggregateInput;
}
