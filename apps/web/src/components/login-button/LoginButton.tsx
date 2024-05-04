'use client';

import { useAuth } from '@/features/auth';
import { Button } from '@repo/ui';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { Icons } from '../icons';

const LoginButton = () => {
  const router = useRouter();
  const { isAuthenticated, logout, currentUser } = useAuth();

  const handleLoginButtonClick = async () => {
    if (isAuthenticated) {
      const res = await logout();
      if (res instanceof Error) {
        console.log(res.message);
      }
    }
    router.push('/auth/login');
  };

  return (
    <div className="flex items-center space-x-2">
      <Button className="h-8 rounded-full font-bold" onClick={() => handleLoginButtonClick()}>
        {isAuthenticated ? 'Log out' : 'Log in'}
      </Button>
      <Suspense fallback={<Icons.spinner className="h-6 w-6 animate-spin" />}>
        {currentUser && (
          <div className="hidden text-sm font-bold md:block">{currentUser?.username}</div>
        )}
      </Suspense>
    </div>
  );
};

export { LoginButton };
