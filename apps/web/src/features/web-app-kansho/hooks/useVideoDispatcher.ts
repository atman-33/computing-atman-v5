import { gql } from '@/lib/graphql-client';
import {
  VideoCreateInput,
  VideoUpdateInput,
  VideoWhereUniqueInput,
} from '@repo/data-access-graphql';
import { useAtomCallback } from 'jotai/utils';
import { useCallback } from 'react';
import { videoAtomFamily, videoIdsAtom } from '../stores/video-atom';

const useVideoDispatcher = () => {
  const loadVideos = useAtomCallback(
    useCallback(async (get, set) => {
      const res = await gql.getVideos();
      res.videos?.map((d) => set(videoAtomFamily({ id: d.id }), d));
      set(
        videoIdsAtom,
        res.videos?.map((d) => d.id),
      );

      return res.videos;
    }, []),
  );

  const createVideo = useAtomCallback(
    useCallback(async (get, set, { data }: { data: VideoCreateInput }) => {
      const res = await gql.createVideo({ data });
      videoAtomFamily(res.createVideo);

      if (!get(videoIdsAtom).includes(res.createVideo.id)) {
        set(videoIdsAtom, [...get(videoIdsAtom), res.createVideo.id]);
      }
      return res.createVideo;
    }, []),
  );

  const updateVideo = useAtomCallback(
    useCallback(
      async (
        get,
        set,
        { data, where }: { data: VideoUpdateInput; where: VideoWhereUniqueInput },
      ) => {
        const res = await gql.updateVideo({ where: where, data: data });
        set(videoAtomFamily({ id: res.updateVideo.id }), res.updateVideo);
        return res.updateVideo;
      },
      [],
    ),
  );

  const deleteVideo = useAtomCallback(
    useCallback(async (get, set, { where }: { where: VideoWhereUniqueInput }) => {
      const res = await gql.deleteVideo({ where: where });
      videoAtomFamily.remove(res.deleteVideo);
      const ids = get(videoIdsAtom);
      set(
        videoIdsAtom,
        ids.filter((id) => id !== res.deleteVideo.id),
      );
      return res.deleteVideo.id;
    }, []),
  );

  return {
    loadVideos,
    createVideo,
    updateVideo,
    deleteVideo,
  };
};

export { useVideoDispatcher };
