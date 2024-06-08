import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoTypeWhereInput } from './video-type-where.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class DeleteManyVideoTypeArgs {
  @Field(() => VideoTypeWhereInput, { nullable: true })
  @Type(() => VideoTypeWhereInput)
  @ValidateNested()
  where?: VideoTypeWhereInput;
}
