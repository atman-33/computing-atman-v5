'use client';

import { Input } from '@repo/ui';
import { useAtom } from 'jotai';
import { searchQueryAtom } from '../stores/video-atom';

export const KanshoSearchInput = () => {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);

  return (
    <div className="relative">
      <button className="absolute inset-y-0 left-2">🔍</button>
      <Input
        className="pl-8 pr-8"
        type="email"
        placeholder="Search title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="absolute inset-y-0 right-4" onClick={() => setSearchQuery('')}>
        ✖
      </button>
    </div>
  );
};
