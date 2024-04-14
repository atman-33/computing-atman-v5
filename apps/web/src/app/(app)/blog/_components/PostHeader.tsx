import { Icons } from '@/components/icons';
import { getFormattedDate } from '@/utils/format';
import { Post } from 'contentlayer/generated';

const PostHeader = ({ post }: { post: Post }) => {
  return (
    <header className="my-8 flex flex-col items-center space-y-4">
      <div className="text-7xl">{post.emoji}</div>
      <h1 className="mb-2 font-bold text-2xl md:text-4xl ">{post.title}</h1>
      {post.description && (
        <p className="text-base mt-0 text-slate-500 dark:text-slate-200">{post.description}</p>
      )}
      <div className="flex text-slate-500 text-sm items-center space-x-2">
        <div className="flex items-center">
          <Icons.edit className="h-5 w-5" />
          <span>{getFormattedDate(new Date(post.date), 'yyyy/MM/dd')}</span>
        </div>
        {post.lastmod && (
          <div className="flex items-center">
            <Icons.update className="h-5 w-5" />
            <span>{getFormattedDate(new Date(post.lastmod), 'yyyy/MM/dd')}</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default PostHeader;
