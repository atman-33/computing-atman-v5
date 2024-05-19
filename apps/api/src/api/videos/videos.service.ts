import { PrismaService } from '@repo/data-access-db';
import { Injectable } from '@nestjs/common';
import { GetVideoArgs } from './dto/args/get-video-args.dto';
import { CreateVideoInput } from './dto/input/create-video-input.dto';
import { DeleteVideoInput } from './dto//input/delete-video-input.dto';
import { UpdateVideoInput } from './dto/input/update-video-input.dto';

@Injectable()
export class VideosService {
  constructor(private readonly prisma: PrismaService) {}

  async getVideos() {
    return await this.prisma.video.findMany();
  }

  async getVideo(getVideoArgs: GetVideoArgs) {
    return await this.prisma.video.findUnique({ where: getVideoArgs.where });
  }

  async createVideo(createVideoData: CreateVideoInput) {
    return await this.prisma.video.create({ data: createVideoData.data });
  }

  async updateVideo(updateVideoData: UpdateVideoInput) {
    return await this.prisma.video.update({
      where: updateVideoData.where,
      data: updateVideoData.data,
    });
  }

  async deleteVideo(deleteVideoData: DeleteVideoInput) {
    return await this.prisma.video.delete({
      where: deleteVideoData.where,
    });
  }
}
