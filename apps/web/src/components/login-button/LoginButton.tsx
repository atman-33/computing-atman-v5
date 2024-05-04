'use client';

import { useAuth } from '@/features/auth';
import { Button } from '@repo/ui';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { Icons } from '../icons';

const LoginButton = () => {
  const router = useRouter();
  const { isAuthenticated, logout, currentUser } = useAuth();

  const handleLogin = async () => {
    if (isAuthenticated) {
      const res = await logout();
      if (res instanceof Error) {
        console.log(res.message);
      }
    }
    router.push('/auth/login');
  };

  return (
    <>
      <Button className="h-8 rounded-full font-bold" onClick={() => handleLogin()}>
        {isAuthenticated ? 'Log out' : 'Log in'}
      </Button>
      <Suspense fallback={<Icons.spinner className="h-6 w-6 animate-spin" />}>
        {currentUser && <div className="text-sm font-bold">{currentUser?.username}</div>}
      </Suspense>
    </>
  );
};

export { LoginButton };
