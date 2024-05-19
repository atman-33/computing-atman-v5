import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Video } from '../video/video.model';
import { VideoTypeCount } from './video-type-count.output';

@ObjectType()
export class VideoType {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Int, { nullable: false })
  sortOrder!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => [Video], { nullable: true })
  Video?: Array<Video>;

  @Field(() => VideoTypeCount, { nullable: false })
  _count?: VideoTypeCount;
}
