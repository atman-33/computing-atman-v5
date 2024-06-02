import { graphql } from '@/gql';
import { VideoCreateInput, VideoUpdateInput, VideoWhereUniqueInput } from '@/gql/graphql';
import { gql } from '@/lib/graphql-client';
import { useAtomCallback } from 'jotai/utils';
import { useCallback } from 'react';
import { videoAtomFamily, videoIdsAtom } from '../stores/video-atom';

const getVideosGql = graphql(`
  query getVideos {
    videos {
      id
      title
      currentChapter
      score
      completed
      review
      createdAt
      updatedAt
      userId
      videoTypeId
    }
  }
`);

const createVideoGql = graphql(`
  mutation createVideo($data: VideoCreateInput!) {
    createVideo(data: $data) {
      id
      title
      currentChapter
      score
      completed
      review
      createdAt
      updatedAt
      userId
      videoTypeId
    }
  }
`);

const updateVideoGql = graphql(`
  mutation updateVideo($data: VideoUpdateInput!, $where: VideoWhereUniqueInput!) {
    updateVideo(data: $data, where: $where) {
      id
      title
      currentChapter
      score
      completed
      review
      createdAt
      updatedAt
      userId
      videoTypeId
    }
  }
`);

const deleteVideoGql = graphql(`
  mutation deleteVideo($where: VideoWhereUniqueInput!) {
    deleteVideo(where: $where) {
      id
    }
  }
`);

const useVideoDispatcher = () => {
  const loadVideos = useAtomCallback(
    useCallback(async (get, set) => {
      const res = await gql.request(getVideosGql);
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
      const res = await gql.request(createVideoGql, { data });
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
        const res = await gql.request(updateVideoGql, { where: where, data: data });
        set(videoAtomFamily({ id: res.updateVideo.id }), res.updateVideo);
        return res.updateVideo;
      },
      [],
    ),
  );

  const deleteVideo = useAtomCallback(
    useCallback(async (get, set, { where }: { where: VideoWhereUniqueInput }) => {
      const res = await gql.request(deleteVideoGql, { where: where });
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
