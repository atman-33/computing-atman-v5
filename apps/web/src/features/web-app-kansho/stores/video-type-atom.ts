import { graphql } from '@/gql';
import { gql } from '@/lib/graphql-client';
import { atom, useAtomValue, useSetAtom } from 'jotai';

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

/**
 * 現在選択されている動画タイプのインデックス
 */
const videoTypeIndex = atom<number>(0);

/**
 * 現在選択されている動画タイプ
 */
export const selectedVideoTypeAtom = atom<
  | {
      id: string;
      name: string;
      sortOrder: number;
    }
  | undefined
>(undefined);

/**
 * 更新関数を呼び出すと、現在選択されている動画タイプを次の動画タイプに変更する。
 * （ビジネスロジック用の関数として利用）
 */
const setNextVideoTypeAtom = atom(
  (get) => get(selectedVideoTypeAtom),
  async (get, set) => {
    const index = get(videoTypeIndex);
    const types = await get(videoTypes);
    set(videoTypeIndex, (index + 1) % types.length);
    set(selectedVideoTypeAtom, types[index]);
  },
);

export const videoTypeSelectors = {
  useGetVideoTypes: () => useAtomValue(videoTypes),
  useSetNextVideoType: () => useSetAtom(setNextVideoTypeAtom),
  useSelectedVideoType: () => useAtomValue(selectedVideoTypeAtom),
};
