import { PrismaModule } from '@repo/data-access-db';
import { Module } from '@nestjs/common';
import { VideosResolver } from './videos.resolver';
import { VideosService } from './videos.service';

@Module({
  providers: [VideosResolver, VideosService],
  imports: [PrismaModule],
})
export class VideosModule {}
