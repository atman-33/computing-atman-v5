import { PrimitiveAtom, atom, useAtomValue } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { BasicVideo } from '../types/video';

export const videoAtomFamily = atomFamily<Partial<BasicVideo>, PrimitiveAtom<BasicVideo>>(
  (video: Partial<BasicVideo>) => atom(video as BasicVideo),
  (a: Partial<BasicVideo>, b: Partial<BasicVideo>) => a.id === b.id,
);

export const videoIdsAtom = atom<string[]>([]);

export const videosAtom = atom<BasicVideo[]>((get) => {
  const ids = get(videoIdsAtom);
  return ids.map((id) =>
    get(
      videoAtomFamily({
        id,
      }),
    ),
  );
});

// ---- ソート & フィルター ---- //
export const searchQueryAtom = atom('');

export const SortCriteria = {
  TopRated: 'TopRated' as const,
  LastUpdated: 'LastUpdated' as const,
};

export type SortCriteriaKind = keyof typeof SortCriteria;

export const sortCriteriaAtom = atom<SortCriteriaKind>(SortCriteria.TopRated);

const filteredAndSortedVideosAtom = atom<BasicVideo[]>((get) => {
  const videos = get(videosAtom);

  const searchQuery = get(searchQueryAtom);
  const sortCriteria = get(sortCriteriaAtom);

  return videos
    .filter((video) => video.title?.includes(searchQuery))
    .sort(sortFunctions[sortCriteria]);
});
// ---------------------------- //

export const videoSelectors = {
  useGetVideos: () => useAtomValue(videosAtom),
  useGetVideo: (id: string) => useAtomValue(videoAtomFamily({ id })),
  useGetFilterAndSortVideos: () => useAtomValue(filteredAndSortedVideosAtom),
};

// ---- Following are private functions ---- //

/**
 * ソート関数
 * a - b: 昇順
 * b - a: 降順
 */
const sortFunctions = {
  [SortCriteria.TopRated]: (a: BasicVideo, b: BasicVideo) => (b.score ?? 0) - (a.score ?? 0),
  [SortCriteria.LastUpdated]: (a: BasicVideo, b: BasicVideo) =>
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
};
