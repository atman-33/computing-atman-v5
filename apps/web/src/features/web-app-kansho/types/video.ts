import { Video } from '@repo/data-access-graphql';

export type BasicVideo = Omit<Video, 'type'> & {
  type: {
    id: string;
    name: string;
  };
};
