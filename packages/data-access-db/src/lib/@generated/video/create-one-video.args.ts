import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoCreateInput } from './video-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneVideoArgs {
  @Field(() => VideoCreateInput, { nullable: false })
  @Type(() => VideoCreateInput)
  @ValidateNested()
  data!: VideoCreateInput;
}
