import { PrismaModule } from '@repo/data-access-db';
import { Module } from '@nestjs/common';
import { VideoTypesResolver } from './video-types.resolver';
import { VideoTypesService } from './video-types.service';

@Module({
  providers: [VideoTypesResolver, VideoTypesService],
  imports: [PrismaModule],
})
export class VideoTypesModule {}
