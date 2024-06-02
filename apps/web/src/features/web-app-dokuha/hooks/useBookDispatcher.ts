import { graphql } from '@/gql';
import { BookCreateInput, BookUpdateInput, BookWhereUniqueInput } from '@/gql/graphql';
import { gql } from '@/lib/graphql-client';
import { useAtomCallback } from 'jotai/utils';
import { useCallback } from 'react';
import { bookAtomFamily, bookIdsAtom } from '../stores/book-atom';

const getBooksGql = graphql(`
  query getBooks {
    books {
      id
      title
      currentChapter
      score
      completed
      review
      createdAt
      updatedAt
      userId
    }
  }
`);

const createBookGql = graphql(`
  mutation createBook($data: BookCreateInput!) {
    createBook(data: $data) {
      id
      title
      currentChapter
      score
      completed
      review
      createdAt
      updatedAt
      userId
    }
  }
`);

const updateBookGql = graphql(`
  mutation updateBook($data: BookUpdateInput!, $where: BookWhereUniqueInput!) {
    updateBook(data: $data, where: $where) {
      id
      title
      currentChapter
      score
      completed
      review
      createdAt
      updatedAt
      userId
    }
  }
`);

const deleteBookGql = graphql(`
  mutation deleteBook($where: BookWhereUniqueInput!) {
    deleteBook(where: $where) {
      id
    }
  }
`);

const useBookDispatcher = () => {
  const loadBooks = useAtomCallback(
    useCallback(async (get, set) => {
      const res = await gql.request(getBooksGql);
      res.books?.map((d) => set(bookAtomFamily({ id: d.id }), d));
      set(
        bookIdsAtom,
        res.books?.map((d) => d.id),
      );

      return res.books;
    }, []),
  );

  const createBook = useAtomCallback(
    useCallback(async (get, set, { data }: { data: BookCreateInput }) => {
      const res = await gql.request(createBookGql, { data });
      bookAtomFamily(res.createBook);

      if (!get(bookIdsAtom).includes(res.createBook.id)) {
        set(bookIdsAtom, [...get(bookIdsAtom), res.createBook.id]);
      }
      return res.createBook;
    }, []),
  );

  const updateBook = useAtomCallback(
    useCallback(
      async (get, set, { data, where }: { data: BookUpdateInput; where: BookWhereUniqueInput }) => {
        const res = await gql.request(updateBookGql, { where: where, data: data });
        set(bookAtomFamily({ id: res.updateBook.id }), res.updateBook);
        return res.updateBook;
      },
      [],
    ),
  );

  const deleteBook = useAtomCallback(
    useCallback(async (get, set, { where }: { where: BookWhereUniqueInput }) => {
      const res = await gql.request(deleteBookGql, { where: where });
      bookAtomFamily.remove(res.deleteBook);
      const ids = get(bookIdsAtom);
      set(
        bookIdsAtom,
        ids.filter((id) => id !== res.deleteBook.id),
      );
      return res.deleteBook.id;
    }, []),
  );

  return {
    loadBooks,
    createBook,
    updateBook,
    deleteBook,
  };
};

export { useBookDispatcher };
