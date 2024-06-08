import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoScalarWhereInput } from './video-scalar-where.input';
import { Type } from 'class-transformer';
import { VideoUpdateManyMutationInput } from './video-update-many-mutation.input';

@InputType()
export class VideoUpdateManyWithWhereWithoutTypeInput {
  @Field(() => VideoScalarWhereInput, { nullable: false })
  @Type(() => VideoScalarWhereInput)
  where!: VideoScalarWhereInput;

  @Field(() => VideoUpdateManyMutationInput, { nullable: false })
  @Type(() => VideoUpdateManyMutationInput)
  data!: VideoUpdateManyMutationInput;
}
