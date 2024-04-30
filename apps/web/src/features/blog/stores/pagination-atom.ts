import { atom } from 'jotai';
import { Pagination } from '../types/pagination';

export const paginationAtom = atom<Pagination>({
  currentPage: 1,
  totalPages: 1,
  itemsPerPage: 1,
});
