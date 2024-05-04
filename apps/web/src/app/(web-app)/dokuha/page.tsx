'use client';

import { useAuth } from '@/features/auth';
import { DokuhaList } from '@/features/web-app-dokuha';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const DokuhaPage = () => {
  const router = useRouter();
  const { setRedirectPath, refleshIsAuthenticated } = useAuth();

  useEffect(() => {
    refleshIsAuthenticated().then((res) => {
      // console.log('res => ', res);
      if (!res) {
        setRedirectPath('/dokuha');
        router.push('/auth/login');
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <DokuhaList />
    </div>
  );
};

export default DokuhaPage;
