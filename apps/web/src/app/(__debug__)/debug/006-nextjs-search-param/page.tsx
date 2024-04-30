'use client';

import { useSearchParams } from 'next/navigation';

const Pqge = () => {
  const searchParams = useSearchParams();

  const search = searchParams.get('search');

  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return <>Search: {search}</>;
};

export default Pqge;
