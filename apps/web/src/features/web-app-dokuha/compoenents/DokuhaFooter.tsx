'use client';

import { Icons } from '@/components/icons';
import { Button, Separator } from '@repo/ui';
import { useRouter } from 'next/navigation';

export const DokuhaFooter = () => {
  const router = useRouter();

  const handleListButtonClick = () => {
    router.push('/dokuha');
  };

  const handleAddButtonClick = () => {
    router.push('/dokuha/edit');
  };

  return (
    <>
      <div className="bg-background absolute bottom-0 mx-auto w-full">
        <Separator orientation="horizontal" />
        <div className="flex justify-evenly">
          <Button
            variant="ghost"
            className="flex h-16 flex-col items-center rounded-full"
            onClick={() => handleListButtonClick()}
          >
            <Icons.list className="h-8 w-8" />
            <div className="text-center">List</div>
          </Button>
          <Separator orientation="vertical" className="h-16" />
          <Button
            variant="ghost"
            className="flex h-16 flex-col items-center rounded-full"
            onClick={() => handleAddButtonClick()}
          >
            <Icons.plusCircle className="h-8 w-8" />
            <div className="text-center">Add</div>
          </Button>
        </div>
      </div>
    </>
  );
};
