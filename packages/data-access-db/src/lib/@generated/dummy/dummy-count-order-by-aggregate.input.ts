import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DummyCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  text?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  int?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  float?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}
