import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VideoTypeOrderByWithRelationInput } from '../video-type/video-type-order-by-with-relation.input';

@InputType()
export class VideoOrderByWithRelationInput {
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

  @Field(() => SortOrder, { nullable: true })
  videoTypeId?: keyof typeof SortOrder;

  @Field(() => VideoTypeOrderByWithRelationInput, { nullable: true })
  type?: VideoTypeOrderByWithRelationInput;
}
