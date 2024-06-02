'use client';

import { graphql } from '@/gql';
import { gql } from '@/lib/graphql-client';
import { useEffect } from 'react';

const queryExampleGql = graphql(`
  query queryExample {
    dummies {
      id
      text
      createdAt
      updatedAt
    }
  }
`);

const Page = () => {
  useEffect(() => {
    const fetch = async () => {
      const dummies = await gql.request(queryExampleGql);
      console.log(dummies);
    };

    fetch();
  });

  return <div>Graphqlのデータが、Consoleに出力されています。</div>;
};

export default Page;
