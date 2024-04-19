import { Breadcrumb } from '@/components/breadcrumb';
import { Post } from 'contentlayer/generated';

interface PostMobileNavProps {
  post: Post;
}

export const PostMobileNav = ({ post }: PostMobileNavProps) => {
  return (
    <>
      <div className="hidden md:container md:flex">
        <Breadcrumb pageName={post?.title} />
      </div>
      <div className="flex md:container md:hidden">
        <div className="ml-2 text-sm">{post?.title}</div>{' '}
      </div>
    </>
  );
};
