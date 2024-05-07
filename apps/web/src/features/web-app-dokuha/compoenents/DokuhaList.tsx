'use client';

import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useBookDispatcher } from '../hooks/useBookDispatcher';
import { bookSelectors, sortCriteriaAtom } from '../stores/book-atom';
import { transformScore } from '../utils/rate-util';
import { DokuhaSearchInput } from './DokuhaSearchInput';
import { DokuhaSortButton } from './DokuhaSortButton';

export const DokuhaList = () => {
  const router = useRouter();
  const sortCriteria = useAtomValue(sortCriteriaAtom);
  const { loadBooks } = useBookDispatcher();
  const books = bookSelectors.useGetFilterAndSortBooks();

  useEffect(() => {
    const fetchBooks = async () => {
      await loadBooks();
    };
    fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBookClick = (bookId: string) => {
    router.push(`/dokuha/edit?id=${bookId}`);
  };

  return (
    <div className="flex flex-col">
      <div className="bg-primary-foreground/30 sticky top-0 z-10 backdrop-blur">
        <DokuhaSearchInput />
        <div className="flex items-center space-x-4">
          <DokuhaSortButton />
          <div className="text-sm">Sort by: {sortCriteria.toString()}</div>
        </div>
      </div>
      <div className="flex flex-col divide-y rounded-sm border-2 p-2">
        {books.map((book) => (
          <div key={book.id}>
            <button
              className="hover:bg-primary/10 w-full rounded-sm px-2 hover:cursor-pointer"
              onClick={() => handleBookClick(book.id as string)}
            >
              <div className="grid min-h-16 grid-cols-10 items-center gap-2 text-wrap">
                <div className="col-span-4 text-left text-sm">{book.title}</div>
                <div className="col-span-2 text-right text-sm">{book.currentChapter}</div>
                <div className="col-span-3 text-right text-sm">
                  {transformScore(book.score ?? 0)}
                </div>
                <div className="col-span-1 text-right text-2xl">{book.completed ? '✅' : '🏃'}</div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
