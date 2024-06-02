import { graphql } from '@/gql';
import { gql } from '@/lib/graphql-client';
import { atom, useAtomValue } from 'jotai';

const getVideoTypesGql = graphql(`
  query getVideoTypes {
    videoTypes {
      id
      name
      sortOrder
    }
  }
`);

const videoTypes = atom(async () => {
  const res = await gql.request(getVideoTypesGql);
  return res.videoTypes.sort((a, b) => a.sortOrder - b.sortOrder);
});

export const videoTypeSelectors = {
  useGetVideoTypes: () => useAtomValue(videoTypes),
};
