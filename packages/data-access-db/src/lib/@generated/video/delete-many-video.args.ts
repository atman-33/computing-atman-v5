import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoWhereInput } from './video-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class DeleteManyVideoArgs {
  @Field(() => VideoWhereInput, { nullable: true })
  @Type(() => VideoWhereInput)
  @ValidateNested()
  where?: VideoWhereInput;
}
