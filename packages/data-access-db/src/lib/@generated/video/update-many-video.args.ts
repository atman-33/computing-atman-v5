import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoUpdateManyMutationInput } from './video-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VideoWhereInput } from './video-where.input';

@ArgsType()
export class UpdateManyVideoArgs {
  @Field(() => VideoUpdateManyMutationInput, { nullable: false })
  @Type(() => VideoUpdateManyMutationInput)
  @ValidateNested()
  data!: VideoUpdateManyMutationInput;

  @Field(() => VideoWhereInput, { nullable: true })
  @Type(() => VideoWhereInput)
  @ValidateNested()
  where?: VideoWhereInput;
}
