import { Book } from '@repo/data-access-graphql';
import { PrimitiveAtom, atom, useAtomValue } from 'jotai';
import { atomFamily } from 'jotai/utils';

/**
 * BookのIDをキーにして、Bookの単体データを取得するためのAtom
 */
export const bookAtomFamily = atomFamily<Partial<Book>, PrimitiveAtom<Book>>(
  (book: Partial<Book>) => atom(book as Book),
  (a: Partial<Book>, b: Partial<Book>) => a.id === b.id,
);

/**
 * Book全てのIDのリスト
 */
export const bookIdsAtom = atom<string[]>([]);

/**
 * Book全てのデータ
 */
export const booksAtom = atom<Book[]>((get) => {
  const ids = get(bookIdsAtom);
  return ids.map((id) =>
    get(
      bookAtomFamily({
        id,
      }),
    ),
  );
});

/**
 * 適用中のBook検索クエリ
 */
export const searchQueryAtom = atom('');

/**
 * Bookのソート条件定義
 */
export const SortCriteria = {
  TopRated: 'TopRated' as const,
  LastUpdated: 'LastUpdated' as const,
};

/**
 * Bookのソート条件の型
 */
export type SortCriteriaKind = keyof typeof SortCriteria;

/**
 * 適用中のBookソート条件
 */
export const sortCriteriaAtom = atom<SortCriteriaKind>(SortCriteria.TopRated);

/**
 * Bookのフィルター&ソート済みデータ
 */
const filteredAndSortedBooksAtom = atom<Book[]>((get) => {
  const books = get(booksAtom);

  const searchQuery = get(searchQueryAtom);
  const sortCriteria = get(sortCriteriaAtom);

  return books
    .filter((book) => book.title?.includes(searchQuery))
    .sort(sortFunctions[sortCriteria]);
});

/**
 * BookのSelectors
 */
export const bookSelectors = {
  useGetBooks: () => useAtomValue(booksAtom) as Book[],
  useGetBook: (id: string) => useAtomValue(bookAtomFamily({ id })),
  useGetFilterAndSortBooks: () => useAtomValue(filteredAndSortedBooksAtom),
};

// ---- Following are private functions ---- //

/**
 * ソート関数
 * a - b: 昇順
 * b - a: 降順
 */
const sortFunctions = {
  [SortCriteria.TopRated]: (a: Book, b: Book) => (b.score ?? 0) - (a.score ?? 0),
  [SortCriteria.LastUpdated]: (a: Book, b: Book) =>
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
};
