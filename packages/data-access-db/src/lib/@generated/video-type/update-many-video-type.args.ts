import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VideoTypeUpdateManyMutationInput } from './video-type-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { VideoTypeWhereInput } from './video-type-where.input';

@ArgsType()
export class UpdateManyVideoTypeArgs {
  @Field(() => VideoTypeUpdateManyMutationInput, { nullable: false })
  @Type(() => VideoTypeUpdateManyMutationInput)
  @ValidateNested()
  data!: VideoTypeUpdateManyMutationInput;

  @Field(() => VideoTypeWhereInput, { nullable: true })
  @Type(() => VideoTypeWhereInput)
  @ValidateNested()
  where?: VideoTypeWhereInput;
}
