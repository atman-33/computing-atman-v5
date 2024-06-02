import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VideoCreateManyVideoTypeInput } from './video-create-many-video-type.input';
import { Type } from 'class-transformer';

@InputType()
export class VideoCreateManyVideoTypeInputEnvelope {
  @Field(() => [VideoCreateManyVideoTypeInput], { nullable: false })
  @Type(() => VideoCreateManyVideoTypeInput)
  data!: Array<VideoCreateManyVideoTypeInput>;
}
