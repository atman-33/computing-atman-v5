import { PrimitiveAtom, atom, useAtomValue } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { PartialVideo } from '../types/video';
import { selectedVideoTypeAtom } from './video-type-atom';

export const videoAtomFamily = atomFamily<Partial<PartialVideo>, PrimitiveAtom<PartialVideo>>(
  (video: Partial<PartialVideo>) => atom(video),
  (a: Partial<PartialVideo>, b: Partial<PartialVideo>) => a.id === b.id,
);

export const videoIdsAtom = atom<string[]>([]);

export const videosAtom = atom<PartialVideo[]>((get) => {
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

const filteredAndSortedVideosAtom = atom<PartialVideo[]>((get) => {
  const videos = get(videosAtom);

  const videoType = get(selectedVideoTypeAtom);
  const searchQuery = get(searchQueryAtom);
  const sortCriteria = get(sortCriteriaAtom);

  return videos
    .filter((video) => video.videoTypeId === videoType?.id)
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
  [SortCriteria.TopRated]: (a: PartialVideo, b: PartialVideo) => (b.score ?? 0) - (a.score ?? 0),
  [SortCriteria.LastUpdated]: (a: PartialVideo, b: PartialVideo) =>
    new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
};
