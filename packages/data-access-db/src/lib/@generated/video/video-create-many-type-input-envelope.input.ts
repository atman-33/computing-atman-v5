import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoCreateManyTypeInput } from './video-create-many-type.input';
import { Type } from 'class-transformer';

@InputType()
export class VideoCreateManyTypeInputEnvelope {
  @Field(() => [VideoCreateManyTypeInput], { nullable: false })
  @Type(() => VideoCreateManyTypeInput)
  data!: Array<VideoCreateManyTypeInput>;
}
