import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BookAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  currentChapter?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  score?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  completed?: keyof typeof SortOrder;
}
