import { VideoType } from '@repo/data-access-graphql';
import { PrimitiveAtom, atom, useAtomValue } from 'jotai';
import { atomFamily } from 'jotai/utils';

export const videoTypeAtomFamily = atomFamily<Partial<VideoType>, PrimitiveAtom<VideoType>>(
  (videoType: Partial<VideoType>) => atom(videoType as VideoType),
  (a: Partial<VideoType>, b: Partial<VideoType>) => a.id === b.id,
);

export const videoTypeIdsAtom = atom<string[]>([]);

export const videoTypesAtom = atom<VideoType[]>((get) => {
  const ids = get(videoTypeIdsAtom);
  return ids.map((id) =>
    get(
      videoTypeAtomFamily({
        id,
      }),
    ),
  );
});

export const videoTypeSelectors = {
  useGetVideoTypes: () => useAtomValue(videoTypesAtom),
  useGetVideoType: (id: string) => useAtomValue(videoTypeAtomFamily({ id })),
};
