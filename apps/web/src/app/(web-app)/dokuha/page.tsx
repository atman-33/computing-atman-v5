'use client';

import { DotFlashing } from '@/components/dot-flashing';
import { useAuth } from '@/features/auth';
import { DokuhaList } from '@/features/web-app-dokuha';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const DokuhaPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { setRedirectPath, refleshIsAuthenticated } = useAuth();

  useEffect(() => {
    refleshIsAuthenticated().then((res) => {
      // console.log('res => ', res);
      if (!res) {
        setRedirectPath('/dokuha');
        router.push('/auth/login');
        return;
      }
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{loading ? <DotFlashing /> : <DokuhaList />}</div>;
};

export default DokuhaPage;
