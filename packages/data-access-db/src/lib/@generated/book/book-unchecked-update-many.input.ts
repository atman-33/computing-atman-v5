import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class BookUncheckedUpdateManyInput {

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Float, {nullable:true})
    currentChapter?: number;

    @Field(() => Float, {nullable:true})
    score?: number;

    @Field(() => Int, {nullable:true})
    completed?: number;

    @Field(() => String, {nullable:true})
    review?: string;

    @Field(() => String, {nullable:true})
    userId?: string;
}
