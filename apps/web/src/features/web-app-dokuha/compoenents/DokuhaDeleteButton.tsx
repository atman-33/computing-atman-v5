'use client';

import { Icons } from '@/components/icons';
import { OkCancelDialog } from '@/components/ok-cancel-dialog';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useBookDispatcher } from '../hooks/useBookDispatcher';

interface DokuhaDeleteButtonProps {
  id: string;
}

export const DokuhaDeleteButton = ({ id }: DokuhaDeleteButtonProps) => {
  const { deleteBook } = useBookDispatcher();
  const router = useRouter();

  const handleClick = async () => {
    await deleteBook({
      where: {
        id: id,
      },
    });
    toast.info('Book deleted.', {
      duration: 2000,
      position: 'bottom-center',
    });

    router.push('/dokuha');
  };

  return (
    <>
      <div>
        <OkCancelDialog
          title="Warning"
          description="Are you sure you want to delete?"
          clickHandler={() => handleClick()}
        >
          <Icons.delete className="h-8 w-8" />
        </OkCancelDialog>
      </div>
    </>
  );
};
