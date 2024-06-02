'use client';

import { Icons } from '@/components/icons';
import { OkCancelDialog } from '@/components/ok-cancel-dialog';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useVideoDispatcher } from '../hooks/useVideoDispatcher';

interface KanshoDeleteButtonProps {
  id: string;
}

export const KanshoDeleteButton = ({ id }: KanshoDeleteButtonProps) => {
  const { deleteVideo } = useVideoDispatcher();
  const router = useRouter();

  const handleClick = async () => {
    await deleteVideo({
      where: {
        id: id,
      },
    });
    toast.info('Video deleted.', {
      duration: 2000,
      position: 'bottom-center',
    });

    router.push('/kansho');
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
