'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const Pqge = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get('search');

  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return <Suspense>Search: {search}</Suspense>;
};

export default Pqge;
