import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VideoCountAggregate } from './video-count-aggregate.output';
import { VideoAvgAggregate } from './video-avg-aggregate.output';
import { VideoSumAggregate } from './video-sum-aggregate.output';
import { VideoMinAggregate } from './video-min-aggregate.output';
import { VideoMaxAggregate } from './video-max-aggregate.output';

@ObjectType()
export class VideoGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => Float, { nullable: true })
  currentChapter?: number;

  @Field(() => Float, { nullable: false })
  score!: number;

  @Field(() => Int, { nullable: false })
  completed!: number;

  @Field(() => String, { nullable: true })
  review?: string;

  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => String, { nullable: false })
  videoTypeId!: string;

  @Field(() => VideoCountAggregate, { nullable: true })
  _count?: VideoCountAggregate;

  @Field(() => VideoAvgAggregate, { nullable: true })
  _avg?: VideoAvgAggregate;

  @Field(() => VideoSumAggregate, { nullable: true })
  _sum?: VideoSumAggregate;

  @Field(() => VideoMinAggregate, { nullable: true })
  _min?: VideoMinAggregate;

  @Field(() => VideoMaxAggregate, { nullable: true })
  _max?: VideoMaxAggregate;
}
