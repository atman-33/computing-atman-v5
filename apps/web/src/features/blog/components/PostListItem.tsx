import { Link } from '@/components/link';
import { type Post } from 'contentlayer/generated';
import { PostDate } from './PostDate';
import { PostTags } from './PostTags';

interface PostListItemProps {
  post: Post;
}

const PostListItem = ({ post }: PostListItemProps) => {
  return (
    <div className="flex space-x-4">
      <Link href={post.slug} className="whitespace-nowrap">
        <div className="bg-background flex h-20 min-h-20 w-20 min-w-20 items-center justify-center rounded-md text-5xl">
          <div>{post?.emoji}</div>
        </div>
      </Link>
      <div className="flex flex-col space-y-2">
        <Link href={post.slug} className="whitespace-nowrap">
          <div className="overflow-x-hidden text-wrap font-semibold">{post?.title}</div>
        </Link>
        <div className="flex flex-wrap space-x-2 space-y-1">
          <PostTags post={post} />
          <PostDate post={post} />
        </div>
      </div>
    </div>
  );
};

export { PostListItem };
