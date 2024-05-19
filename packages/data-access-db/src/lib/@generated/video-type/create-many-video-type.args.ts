import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoTypeCreateManyInput } from './video-type-create-many.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateManyVideoTypeArgs {
  @Field(() => [VideoTypeCreateManyInput], { nullable: false })
  @Type(() => VideoTypeCreateManyInput)
  @ValidateNested()
  data!: Array<VideoTypeCreateManyInput>;
}
