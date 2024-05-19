import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VideoTypeCountAggregate } from './video-type-count-aggregate.output';
import { VideoTypeAvgAggregate } from './video-type-avg-aggregate.output';
import { VideoTypeSumAggregate } from './video-type-sum-aggregate.output';
import { VideoTypeMinAggregate } from './video-type-min-aggregate.output';
import { VideoTypeMaxAggregate } from './video-type-max-aggregate.output';

@ObjectType()
export class VideoTypeGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Int, { nullable: false })
  sortOrder!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => VideoTypeCountAggregate, { nullable: true })
  _count?: VideoTypeCountAggregate;

  @Field(() => VideoTypeAvgAggregate, { nullable: true })
  _avg?: VideoTypeAvgAggregate;

  @Field(() => VideoTypeSumAggregate, { nullable: true })
  _sum?: VideoTypeSumAggregate;

  @Field(() => VideoTypeMinAggregate, { nullable: true })
  _min?: VideoTypeMinAggregate;

  @Field(() => VideoTypeMaxAggregate, { nullable: true })
  _max?: VideoTypeMaxAggregate;
}
