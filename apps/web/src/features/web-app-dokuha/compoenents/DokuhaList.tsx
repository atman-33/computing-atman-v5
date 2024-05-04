'use client';

import { Input, ScrollArea, Separator } from '@repo/ui';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useBookDispatcher } from '../hooks/useBookDispatcher';
import { bookSelectors } from '../stores/book-atom';
import { sortCriteriaAtom, sortFunctions } from '../stores/sort-criteria-atom';
import { transformScore } from '../utils/rate-util';
import { DokuhaSortButton } from './DokuhaSortButton';

export const DokuhaList = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>('');
  const sortCriteria = useAtomValue(sortCriteriaAtom);
  const { loadBooks } = useBookDispatcher();
  const books = bookSelectors.useGetBooks();

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
    <div className="flex flex-col space-y-2">
      <Input
        type="email"
        placeholder="🔍 Search title..."
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className="flex items-center space-x-4">
        <DokuhaSortButton />
        <div>Sort by: {sortCriteria.toString()}</div>
      </div>
      <ScrollArea className="mb-40 flex h-[65vh] flex-col rounded-sm border-2 p-2">
        {books
          .filter((book) => book.title?.includes(searchText))
          .sort(sortFunctions[sortCriteria])
          .map((book) => (
            <div key={book.id}>
              <Separator orientation="horizontal" className="my-2" />
              <button
                className="hover:bg-primary/10 w-full rounded-sm px-2 hover:cursor-pointer"
                onClick={() => handleBookClick(book.id as string)}
              >
                <div className="grid min-h-16 grid-cols-10 items-center gap-2 text-wrap">
                  <div className="col-span-4 text-left">{book.title}</div>
                  <div className="col-span-2 text-right">{book.currentChapter}</div>
                  <div className="col-span-3 text-right">{transformScore(book.score ?? 0)}</div>
                  <div className="col-span-1 text-right text-2xl">
                    {book.completed ? '✅' : '🏃'}
                  </div>
                </div>
              </button>
            </div>
          ))}
      </ScrollArea>
    </div>
  );
};
