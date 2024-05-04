import { Module } from '@nestjs/common';
import { PrismaModule } from '@repo/data-access-db';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  providers: [UsersResolver, UsersService],
  imports: [PrismaModule],
  exports: [UsersService],
})
export class UsersModule {}
