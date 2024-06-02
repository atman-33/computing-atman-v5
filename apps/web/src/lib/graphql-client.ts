import { webEnv } from '@/config/web-env';
import { GraphQLClient } from 'graphql-request';

if (!webEnv.NEXT_PUBLIC_API_GQL_URL) {
  throw new Error('env: NEXT_PUBLIC_API_GQL_URL is not defined');
}

const getGraphQLClient = (url: string) => {
  return new GraphQLClient(url, {
    credentials: 'include',
  });
};

export const gql: ReturnType<typeof getGraphQLClient> = getGraphQLClient(
  webEnv.NEXT_PUBLIC_API_GQL_URL,
);
