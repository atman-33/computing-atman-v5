import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BookCountOrderByAggregateInput } from './book-count-order-by-aggregate.input';
import { BookAvgOrderByAggregateInput } from './book-avg-order-by-aggregate.input';
import { BookMaxOrderByAggregateInput } from './book-max-order-by-aggregate.input';
import { BookMinOrderByAggregateInput } from './book-min-order-by-aggregate.input';
import { BookSumOrderByAggregateInput } from './book-sum-order-by-aggregate.input';

@InputType()
export class BookOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  title?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  currentChapter?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  score?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  completed?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  review?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;

  @Field(() => BookCountOrderByAggregateInput, { nullable: true })
  _count?: BookCountOrderByAggregateInput;

  @Field(() => BookAvgOrderByAggregateInput, { nullable: true })
  _avg?: BookAvgOrderByAggregateInput;

  @Field(() => BookMaxOrderByAggregateInput, { nullable: true })
  _max?: BookMaxOrderByAggregateInput;

  @Field(() => BookMinOrderByAggregateInput, { nullable: true })
  _min?: BookMinOrderByAggregateInput;

  @Field(() => BookSumOrderByAggregateInput, { nullable: true })
  _sum?: BookSumOrderByAggregateInput;
}
