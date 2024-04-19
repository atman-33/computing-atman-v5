import { type Post } from 'contentlayer/generated';
import { PostDate } from './PostDate';
import { PostTags } from './PostTags';

interface PostListItemProps {
  post: Post;
}

const PostListItem = ({ post }: PostListItemProps) => {
  return (
    <div className="flex space-x-4">
      <div className="flex h-20 min-h-20 w-20 min-w-20 items-center justify-center rounded-md bg-white text-5xl">
        <div>{post?.emoji}</div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="overflow-x-hidden text-wrap font-bold">{post?.title}</div>
        <div className="flex flex-wrap space-x-2 space-y-1">
          <PostTags post={post} />
          <PostDate post={post} />
        </div>
      </div>
    </div>
  );
};

export { PostListItem };
