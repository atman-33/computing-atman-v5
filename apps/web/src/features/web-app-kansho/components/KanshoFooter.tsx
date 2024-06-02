'use client';

import { Icons } from '@/components/icons';
import { Separator } from '@repo/ui';
import { useRouter } from 'next/navigation';

export const KanshoFooter = () => {
  const router = useRouter();

  const handleListButtonClick = () => {
    router.push('/kansho');
  };

  const handleAddButtonClick = () => {
    router.push('/kansho/edit');
  };

  return (
    <>
      <div className="bg-background mx-auto w-full">
        <Separator orientation="horizontal" />
        <div className="flex items-center justify-evenly">
          <button
            className="hover:bg-primary/10 flex w-full flex-col items-center py-2"
            onClick={() => handleListButtonClick()}
          >
            <Icons.list className="h-6 w-6" />
            <div className="text-center text-xs">List</div>
          </button>
          <Separator orientation="vertical" className="h-14" />
          <button
            className="hover:bg-primary/10 flex w-full flex-col items-center py-2"
            onClick={() => handleAddButtonClick()}
          >
            <Icons.plusCircle className="h-6 w-6" />
            <div className="text-center text-xs">Add</div>
          </button>
        </div>
      </div>
    </>
  );
};
