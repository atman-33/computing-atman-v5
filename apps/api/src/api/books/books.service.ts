import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { PrismaService } from '@repo/data-access-db';
import { DeleteBookInput } from './dto//input/delete-book-input.dto';
import { GetBookArgs } from './dto/args/get-book-args.dto';
import { CreateBookInput } from './dto/input/create-book-input.dto';
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

  /**
   * 本データを作成する。ただし、既に同じタイトルの本が存在している場合はエラーにする。
   * @param createBookData
   * @returns
   */
  async createBook(createBookData: CreateBookInput) {
    const find = await this.prisma.book.findFirst({
      where: {
        userId: createBookData.data.userId,
        title: createBookData.data.title,
      },
    });

    if (find) {
      throw new UnprocessableEntityException('Book already exists.');
    }

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
