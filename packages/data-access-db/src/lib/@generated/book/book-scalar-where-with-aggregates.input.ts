import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class BookScalarWhereWithAggregatesInput {

    @Field(() => [BookScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BookScalarWhereWithAggregatesInput>;

    @Field(() => [BookScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BookScalarWhereWithAggregatesInput>;

    @Field(() => [BookScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BookScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    currentChapter?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    score?: FloatWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    completed?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    review?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
