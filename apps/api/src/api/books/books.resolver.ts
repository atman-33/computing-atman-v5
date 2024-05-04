import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { GetBookArgs } from './dto/args/get-book-args.dto';
import { CreateBookInput } from './dto/input/create-book-input.dto';
import { DeleteBookInput } from './dto/input/delete-book-input.dto';
import { UpdateBookInput } from './dto/input/update-book-input.dto';
import { BooksService } from './books.service';
import { Book } from './models/book.model';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query(() => [Book], { name: 'books' })
  async getBooks() {
    return await this.booksService.getBooks();
  }

  @Query(() => Book, { name: 'book' })
  async getBook(@Args() getBookArgs: GetBookArgs) {
    return await this.booksService.getBook(getBookArgs);
  }

  @Mutation(() => Book, { name: 'createBook' })
  async createBook(@Args() createBookData: CreateBookInput) {
    return await this.booksService.createBook(createBookData);
  }

  @Mutation(() => Book, { name: 'updateBook' })
  async updateBook(@Args() updateBookData: UpdateBookInput) {
    return await this.booksService.updateBook(updateBookData);
  }

  @Mutation(() => Book, { name: 'deleteBook' })
  async deleteBook(@Args() deleteBookData: DeleteBookInput) {
    return await this.booksService.deleteBook(deleteBookData);
  }
}
