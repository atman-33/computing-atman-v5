'use client';

import { Icons } from '@/components/icons';
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@repo/ui';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { SortCriteria, SortCriteriaKind, sortCriteriaAtom } from '../stores/sort-criteria-atom';

export const DokuhaSortButton = () => {
  const [open, setOpen] = useState(false);

  const setSortCriteria = useSetAtom(sortCriteriaAtom);

  const handleSortButtonClick = (creteria: SortCriteriaKind) => {
    switch (creteria) {
      case SortCriteria.TopRated:
        console.log('SortCriteria.TopRated');
        setSortCriteria(SortCriteria.TopRated);
        setOpen(false);
        break;
      case SortCriteria.LastUpdated:
        console.log('SortCriteria.LastUpdated');
        setSortCriteria(SortCriteria.LastUpdated);
        setOpen(false);
        break;
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button variant={'ghost'} className="m-1 h-8 w-8 rounded-full p-1">
          <Icons.sort className="h-6 w-6 fill-current" />
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Sort By?</SheetTitle>
          <SheetDescription>
            <div className="flex flex-col space-y-2">
              <Button
                variant="ghost"
                className="self-start rounded-sm"
                onClick={() => handleSortButtonClick(SortCriteria.TopRated)}
              >
                Top Rated
              </Button>
              <Button
                variant="ghost"
                className="self-start rounded-sm"
                onClick={() => handleSortButtonClick(SortCriteria.LastUpdated)}
              >
                Last Updated
              </Button>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
