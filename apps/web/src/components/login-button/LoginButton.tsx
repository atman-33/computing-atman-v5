'use client';

import { useAuth } from '@/features/auth';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@repo/ui';
import { usePathname, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { toast } from 'sonner';
import { Icons } from '../icons';

const LoginButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, logout, currentUser, setRedirectPath } = useAuth();

  const handleLoginButtonClick = async () => {
    router.push('/auth/login');
  };

  const handleLogout = async () => {
    if (isAuthenticated) {
      const res = await logout();
      toast.info('Logged out', {
        duration: 2000,
        position: 'bottom-center',
      });
      if (res instanceof Error) {
        console.log(res.message);
      }
    }
  };

  const handleChangePassword = async () => {
    if (isAuthenticated) {
      setRedirectPath(pathname);
      router.push('/auth/password-reset');
    }
  };

  return (
    <>
      <Suspense fallback={<Icons.spinner className="h-6 w-6 animate-spin" />}>
        {isAuthenticated ? (
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="dark:bg-foreground h-8 w-8 rounded-full p-0">
                  <Icons.user className="h-6 w-6 " />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{currentUser?.username}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleChangePassword()}>
                  Change Password
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleLogout()}>Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <Button className="h-8 rounded-full font-bold" onClick={() => handleLoginButtonClick()}>
            Log in
          </Button>
        )}
      </Suspense>
    </>
  );
};

export { LoginButton };
