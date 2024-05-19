import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoTypeCreateInput } from './video-type-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneVideoTypeArgs {
  @Field(() => VideoTypeCreateInput, { nullable: false })
  @Type(() => VideoTypeCreateInput)
  @ValidateNested()
  data!: VideoTypeCreateInput;
}
