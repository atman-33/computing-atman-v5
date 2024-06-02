'use client';

import { DotFlashing } from '@/components/dot-flashing';
import { useAuth } from '@/features/auth';
import { KanshoList } from '@/features/web-app-kansho';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const KanshoPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { setRedirectPath, refleshIsAuthenticated } = useAuth();

  useEffect(() => {
    refleshIsAuthenticated().then((res) => {
      // console.log('res => ', res);
      if (!res) {
        setRedirectPath('/kansho');
        router.push('/auth/login');
        return;
      }
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>{loading ? <DotFlashing /> : <KanshoList />}</div>;
};

export default KanshoPage;
