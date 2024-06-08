import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoCreateManyInput } from './video-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyVideoArgs {
  @Field(() => [VideoCreateManyInput], { nullable: false })
  @Type(() => VideoCreateManyInput)
  @ValidateNested()
  data!: Array<VideoCreateManyInput>;
}
