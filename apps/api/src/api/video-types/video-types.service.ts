import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from '@repo/data-access-db';
import { DeleteVideoTypeInput } from './dto//input/delete-video-type-input.dto';
import { GetVideoTypeArgs } from './dto/args/get-video-type-args.dto';
import { CreateVideoTypeInput } from './dto/input/create-video-type-input.dto';
import { UpdateVideoTypeInput } from './dto/input/update-video-type-input.dto';

@Injectable()
export class VideoTypesService {
  constructor(private readonly prisma: PrismaService) {}

  async getVideoTypes() {
    return await this.prisma.videoType.findMany();
  }

  async getVideoType(getVideoTypeArgs: GetVideoTypeArgs) {
    return await this.prisma.videoType.findUnique({
      where: getVideoTypeArgs.where,
    });
  }

  /**
   * 動画タイプを作成する。ただし、既に同じ名称の名前が存在している場合はエラーとする。
   * @param createVideoTypeData
   * @returns
   */
  async createVideoType(createVideoTypeData: CreateVideoTypeInput) {
    const find = await this.prisma.videoType.findFirst({
      where: {
        name: createVideoTypeData.data.name,
      },
    });

    if (find) {
      throw new UnprocessableEntityException('Video type already exists.');
    }

    return await this.prisma.videoType.create({
      data: createVideoTypeData.data,
    });
  }

  async updateVideoType(updateVideoTypeData: UpdateVideoTypeInput) {
    return await this.prisma.videoType.update({
      where: updateVideoTypeData.where,
      data: updateVideoTypeData.data,
    });
  }

  async deleteVideoType(deleteVideoTypeData: DeleteVideoTypeInput) {
    return await this.prisma.videoType.delete({
      where: deleteVideoTypeData.where,
    });
  }

  /**
   * 初期データを作成する。
   */
  async initialize() {
    const initialData = [
      {
        name: 'Movie',
        sortOrder: 1,
      },
      {
        name: 'TV Series',
        sortOrder: 2,
      },
    ];

    initialData.map(async (data) => {
      const find = await this.prisma.videoType.findFirst({
        where: {
          name: data.name,
        },
      });

      if (find) {
        this.updateVideoType({ where: { id: find.id }, data });
      } else {
        this.createVideoType({ data });
      }
    });
  }
}
