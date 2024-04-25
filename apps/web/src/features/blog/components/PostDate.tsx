import { Icons } from '@/components/icons';
import { getFormattedDate } from '@/utils/format';
import { Post } from 'contentlayer/generated';

const PostDate = ({ post }: { post: Post }) => {
  return (
    <div className="flex items-center space-x-2 text-xs text-slate-500">
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
  );
};

export { PostDate };
