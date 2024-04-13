'use client';

import { gql } from '@/lib/graphql-client';
import { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    const fetch = async () => {
      const dummies = await gql.queryExample();
      console.log(dummies);
    };

    fetch();
  });

  return <div>Graphqlのデータが、Consoleに出力されています。</div>;
};

export default Page;
