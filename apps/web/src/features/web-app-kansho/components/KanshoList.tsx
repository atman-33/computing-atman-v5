'use client';

import { transformScore } from '@/utils/rate-util';
import { ScrollArea, Separator } from '@repo/ui';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useVideoDispatcher } from '../hooks/useVideoDispatcher';
import { sortCriteriaAtom, videoSelectors } from '../stores/video-atom';
import { KanshoSearchInput } from './KanshoSearchInput';
import { KanshoSortButton } from './KanshoSortButton';
import { KnashoTypeSelect } from './KnashoTypeSelect';

export const KanshoList = () => {
  const router = useRouter();
  const sortCriteria = useAtomValue(sortCriteriaAtom);
  const { loadVideos } = useVideoDispatcher();
  const videos = videoSelectors.useGetFilterAndSortVideos();

  useEffect(() => {
    const fetchVideos = async () => {
      await loadVideos();
    };
    fetchVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVideoClick = (videoId: string) => {
    router.push(`/kansho/edit?id=${videoId}`);
  };

  return (
    <div className="flex flex-col">
      <KanshoSearchInput />
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4">
          <KanshoSortButton />
          <div className="text-sm">Sort by: {sortCriteria.toString()}</div>
        </div>
        <KnashoTypeSelect />
      </div>
      {/* NOTE: スマホアプリでスクロールエリアの高さを固定する場合は、h-[calc(100dvh-XXXpx)で指定するとよい */}
      <ScrollArea className="mb-2 h-[calc(100dvh-220px)] rounded-sm border-[1px] p-2">
        {videos.map((video, index, array) => (
          <div key={video.id}>
            <button
              className="hover:bg-primary/10 w-full rounded-sm px-2 hover:cursor-pointer"
              onClick={() => handleVideoClick(video.id as string)}
            >
              <div className="grid min-h-16 grid-cols-10 items-center gap-2 text-wrap">
                <div className="col-span-4 text-left text-sm">{video.title}</div>
                <div className="col-span-2 text-right text-sm">{video.currentChapter}</div>
                <div className="col-span-3 text-right text-sm">
                  {transformScore(video.score ?? 0)}
                </div>
                <div className="col-span-1 text-right text-2xl">
                  {video.completed ? '✅' : '🏃'}
                </div>
              </div>
            </button>
            {index !== array.length - 1 && <Separator orientation="horizontal" />}
          </div>
        ))}
      </ScrollArea>
    </div>
  );
};
