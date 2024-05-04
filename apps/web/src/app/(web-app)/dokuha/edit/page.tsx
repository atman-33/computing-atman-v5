'use client';

import { useAuth } from '@/features/auth';
import { DokuhaEdit } from '@/features/web-app-dokuha';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const EditPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
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
    <>
      <DokuhaEdit id={id} />
    </>
  );
};

export default EditPage;
