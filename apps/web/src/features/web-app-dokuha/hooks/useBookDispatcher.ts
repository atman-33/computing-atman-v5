import { gql } from '@/lib/graphql-client';
import {
  BookCreateInput,
  BookUpdateInput,
  BookWhereUniqueInput,
} from '@repo/data-access-graphql';
import { useAtomCallback } from 'jotai/utils';
import { useCallback } from 'react';
import { bookAtomFamily, bookIdsAtom } from '../stores/book-atom';

const useBookDispatcher = () => {
  const loadBooks = useAtomCallback(
    useCallback(async (get, set) => {
      const res = await gql.getBooks();
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
      const res = await gql.createBook({ data });
      bookAtomFamily(res.createBook);

      if (!get(bookIdsAtom).includes(res.createBook.id)) {
        set(bookIdsAtom, [...get(bookIdsAtom), res.createBook.id]);
      }
      return res.createBook;
    }, []),
  );

  const updateBook = useAtomCallback(
    useCallback(
      async (
        get,
        set,
        { data, where }: { data: BookUpdateInput; where: BookWhereUniqueInput },
      ) => {
        const res = await gql.updateBook({ where: where, data: data });
        set(bookAtomFamily({ id: res.updateBook.id }), res.updateBook);
        return res.updateBook;
      },
      [],
    ),
  );

  const deleteBook = useAtomCallback(
    useCallback(async (get, set, { where }: { where: BookWhereUniqueInput }) => {
      const res = await gql.deleteBook({ where: where });
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
