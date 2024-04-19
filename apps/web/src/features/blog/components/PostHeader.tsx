import { Post } from 'contentlayer/generated';
import { PostDate } from './PostDate';

const PostHeader = ({ post }: { post: Post }) => {
  return (
    <header className="my-8 flex flex-col items-center space-y-4">
      <div className="text-7xl">{post.emoji}</div>
      <h1 className="mb-2 text-center text-2xl font-bold md:text-4xl ">{post.title}</h1>
      {post.description && (
        <p className="mt-0 text-center text-base text-slate-500 dark:text-slate-200">
          {post.description}
        </p>
      )}
      <PostDate post={post} />
    </header>
  );
};

export { PostHeader };
