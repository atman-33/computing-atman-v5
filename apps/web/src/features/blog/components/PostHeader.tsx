import { Post } from 'contentlayer/generated';
import { PostDate } from './PostDate';

const PostHeader = ({ post }: { post: Post }) => {
  return (
    <header className="my-8 flex flex-col items-center space-y-4">
      <div className="text-7xl">{post.emoji}</div>
      <h1 className="mb-2 font-bold text-center text-2xl md:text-4xl ">{post.title}</h1>
      {post.description && (
        <p className="text-base mt-0 text-slate-500 dark:text-slate-200 text-center">
          {post.description}
        </p>
      )}
      <PostDate post={post} />
    </header>
  );
};

export { PostHeader };
