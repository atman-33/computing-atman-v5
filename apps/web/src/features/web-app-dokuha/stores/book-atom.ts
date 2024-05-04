import { Book } from '@repo/data-access-graphql';
import { atom, useAtomValue } from 'jotai';
import { atomFamily } from 'jotai/utils';

export type PartialBook = Partial<Book>;

export const bookAtomFamily = atomFamily(
  (book: PartialBook) => atom(book),
  (a: PartialBook, b: PartialBook) => a.id === b.id,
);

export const bookIdsAtom = atom<string[]>([]);

export const booksAtom = atom<PartialBook[]>((get) => {
  const ids = get(bookIdsAtom);
  return ids.map((id) =>
    get(
      bookAtomFamily({
        id,
      }),
    ),
  );
});

export const bookSelectors = {
  useGetBooks: () => useAtomValue(booksAtom),
  useGetBook: (id: string) => useAtomValue(bookAtomFamily({ id })),
};
