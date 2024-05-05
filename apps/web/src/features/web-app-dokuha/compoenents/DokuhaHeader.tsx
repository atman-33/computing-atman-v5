import { Icons } from '@/components/icons';
import { LoginButton } from '@/components/login-button';
import { Separator } from '@repo/ui';

export const DokuhaHeader = () => {
  return (
    <>
      <div className="flex items-center justify-between space-x-2">
        <div className="flex items-center space-x-2">
          <Icons.books className="h-12 w-12 fill-current" />
          <h1 className="text-xl font-bold">本 Dokuha</h1>
        </div>
        <LoginButton />
      </div>
      <Separator orientation="horizontal" className="mt-2" />
    </>
  );
};
