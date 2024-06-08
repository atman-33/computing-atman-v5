import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VideoTypeCountOrderByAggregateInput } from './video-type-count-order-by-aggregate.input';
import { VideoTypeAvgOrderByAggregateInput } from './video-type-avg-order-by-aggregate.input';
import { VideoTypeMaxOrderByAggregateInput } from './video-type-max-order-by-aggregate.input';
import { VideoTypeMinOrderByAggregateInput } from './video-type-min-order-by-aggregate.input';
import { VideoTypeSumOrderByAggregateInput } from './video-type-sum-order-by-aggregate.input';

@InputType()
export class VideoTypeOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  sortOrder?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => VideoTypeCountOrderByAggregateInput, { nullable: true })
  _count?: VideoTypeCountOrderByAggregateInput;

  @Field(() => VideoTypeAvgOrderByAggregateInput, { nullable: true })
  _avg?: VideoTypeAvgOrderByAggregateInput;

  @Field(() => VideoTypeMaxOrderByAggregateInput, { nullable: true })
  _max?: VideoTypeMaxOrderByAggregateInput;

  @Field(() => VideoTypeMinOrderByAggregateInput, { nullable: true })
  _min?: VideoTypeMinOrderByAggregateInput;

  @Field(() => VideoTypeSumOrderByAggregateInput, { nullable: true })
  _sum?: VideoTypeSumOrderByAggregateInput;
}
