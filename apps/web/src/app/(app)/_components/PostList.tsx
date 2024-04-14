import { Icons } from '@/components/icons';
import { Link } from '@/components/link';
import { Tooltip, TooltipContent, TooltipTrigger } from '@repo/ui';
import { allPosts } from 'contentlayer/generated';
import PostListItem from './PostListItem';

const PostList = () => {
  const posts = allPosts;
  // console.log(posts);
  return (
    <>
      <div
        className="bg-primary/10 p-8"
        style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}
      >
        <div className="container mx-auto">
          <div className="flex items-baseline space-x-2">
            <h3 className="text-3xl font-bold">Latest</h3>
            <Tooltip>
              <TooltipTrigger asChild>
                <Icons.question className="h-4 w-4" />
              </TooltipTrigger>
              <TooltipContent>
                <p>プログラミング等、IT関連のブログ記事</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <span className="m-4" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {posts.map((post) => (
              <Link href={post.slug} className="whitespace-nowrap">
                <PostListItem key={post.title} post={post} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
