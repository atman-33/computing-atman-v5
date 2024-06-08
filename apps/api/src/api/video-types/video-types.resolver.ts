import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { GetVideoTypeArgs } from './dto/args/get-video-type-args.dto';
import { CreateVideoTypeInput } from './dto/input/create-video-type-input.dto';
import { DeleteVideoTypeInput } from './dto/input/delete-video-type-input.dto';
import { UpdateVideoTypeInput } from './dto/input/update-video-type-input.dto';
import { VideoTypesService } from './video-types.service';
import { VideoType } from './models/video-type.model';

@Resolver(() => VideoType)
export class VideoTypesResolver {
  constructor(private readonly videoTypesService: VideoTypesService) {}

  @Query(() => [VideoType], { name: 'videoTypes' })
  async getVideoTypes() {
    return await this.videoTypesService.getVideoTypes();
  }

  @Query(() => VideoType, { name: 'videoType' })
  async getVideoType(@Args() getVideoTypeArgs: GetVideoTypeArgs) {
    return await this.videoTypesService.getVideoType(getVideoTypeArgs);
  }

  @Mutation(() => VideoType, { name: 'createVideoType' })
  async createVideoType(@Args() createVideoTypeData: CreateVideoTypeInput) {
    return await this.videoTypesService.createVideoType(createVideoTypeData);
  }

  @Mutation(() => VideoType, { name: 'updateVideoType' })
  async updateVideoType(@Args() updateVideoTypeData: UpdateVideoTypeInput) {
    return await this.videoTypesService.updateVideoType(updateVideoTypeData);
  }

  @Mutation(() => VideoType, { name: 'deleteVideoType' })
  async deleteVideoType(@Args() deleteVideoTypeData: DeleteVideoTypeInput) {
    return await this.videoTypesService.deleteVideoType(deleteVideoTypeData);
  }
}
