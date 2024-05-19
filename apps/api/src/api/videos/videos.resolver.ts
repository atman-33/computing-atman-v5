import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { GetVideoArgs } from './dto/args/get-video-args.dto';
import { CreateVideoInput } from './dto/input/create-video-input.dto';
import { DeleteVideoInput } from './dto/input/delete-video-input.dto';
import { UpdateVideoInput } from './dto/input/update-video-input.dto';
import { VideosService } from './videos.service';
import { Video } from './models/video.model';

@Resolver(() => Video)
export class VideosResolver {
  constructor(private readonly videosService: VideosService) {}

  @Query(() => [Video], { name: 'videos' })
  async getVideos() {
    return await this.videosService.getVideos();
  }

  @Query(() => Video, { name: 'video' })
  async getVideo(@Args() getVideoArgs: GetVideoArgs) {
    return await this.videosService.getVideo(getVideoArgs);
  }

  @Mutation(() => Video, { name: 'createVideo' })
  async createVideo(@Args() createVideoData: CreateVideoInput) {
    return await this.videosService.createVideo(createVideoData);
  }

  @Mutation(() => Video, { name: 'updateVideo' })
  async updateVideo(@Args() updateVideoData: UpdateVideoInput) {
    return await this.videosService.updateVideo(updateVideoData);
  }

  @Mutation(() => Video, { name: 'deleteVideo' })
  async deleteVideo(@Args() deleteVideoData: DeleteVideoInput) {
    return await this.videosService.deleteVideo(deleteVideoData);
  }
}
