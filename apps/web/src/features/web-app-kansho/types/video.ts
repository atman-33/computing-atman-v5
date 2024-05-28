import { Video } from '@repo/data-access-graphql';

/**
 * Video タイプ。アプリで利用する基本情報のみ保持したデータ型
 */
export type BasicVideo = Omit<Video, 'type'> & {
  type: {
    id: string;
    name: string;
  };
};
