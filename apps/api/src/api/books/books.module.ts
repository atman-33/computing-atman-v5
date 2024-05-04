import { PrismaModule } from '@repo/data-access-db';
import { Module } from '@nestjs/common';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';

@Module({
  providers: [BooksResolver, BooksService],
  imports: [PrismaModule],
})
export class BooksModule {}
