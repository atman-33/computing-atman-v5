import { atom } from 'jotai';
import { PartialBook } from './book-atom';

export const SortCriteria = {
  TopRated: 'TopRated' as const,
  LastUpdated: 'LastUpdated' as const,
};

export type SortCriteriaKind = keyof typeof SortCriteria;

/**
 * ソート条件
 */
export const sortCriteriaAtom = atom<SortCriteriaKind>(SortCriteria.TopRated);

/**
 * ソート関数
 * a - b: 昇順
 * b - a: 降順
 */
export const sortFunctions = {
  [SortCriteria.TopRated]: (a: PartialBook, b: PartialBook) => (b.score ?? 0) - (a.score ?? 0),
  [SortCriteria.LastUpdated]: (a: PartialBook, b: PartialBook) =>
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
};
