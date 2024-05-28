import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VideoType } from '../video-type/video-type.model';

@ObjectType()
export class Video {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  title!: string;

  @Field(() => Float, { nullable: true })
  currentChapter!: number | null;

  @Field(() => Float, { nullable: false, defaultValue: 0 })
  score!: number;

  @Field(() => Int, { nullable: false, defaultValue: 0 })
  completed!: number;

  @Field(() => String, { nullable: true })
  review!: string | null;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => String, { nullable: false })
  videoTypeId!: string;

  @Field(() => VideoType, { nullable: false })
  videoType?: VideoType;
}
