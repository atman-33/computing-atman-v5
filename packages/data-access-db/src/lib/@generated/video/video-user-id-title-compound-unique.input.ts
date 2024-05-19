import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class VideoUserIdTitleCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => String, { nullable: false })
  title!: string;
}
