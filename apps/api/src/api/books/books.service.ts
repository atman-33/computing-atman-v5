import { PrismaService } from '@repo/data-access-db';
import { Injectable } from '@nestjs/common';
import { GetBookArgs } from './dto/args/get-book-args.dto';
import { CreateBookInput } from './dto/input/create-book-input.dto';
import { DeleteBookInput } from './dto//input/delete-book-input.dto';
import { UpdateBookInput } from './dto/input/update-book-input.dto';

@Injectable()
export class BooksService {
  constructor(private readonly prisma: PrismaService) {}

  async getBooks() {
    return await this.prisma.book.findMany();
  }

  async getBook(getBookArgs: GetBookArgs) {
    return await this.prisma.book.findUnique({ where: getBookArgs.where });
  }

  async createBook(createBookData: CreateBookInput) {
    return await this.prisma.book.create({ data: createBookData.data });
  }

  async updateBook(updateBookData: UpdateBookInput) {
    return await this.prisma.book.update({
      where: updateBookData.where,
      data: updateBookData.data,
    });
  }

  async deleteBook(deleteBookData: DeleteBookInput) {
    return await this.prisma.book.delete({
      where: deleteBookData.where,
    });
  }
}
