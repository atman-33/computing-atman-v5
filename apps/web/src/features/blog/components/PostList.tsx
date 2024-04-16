import { Icons } from '@/components/icons';
import { Link } from '@/components/link';
import { Tooltip, TooltipContent, TooltipTrigger } from '@repo/ui';
import { allPosts } from 'contentlayer/generated';
import { PostListItem } from './PostListItem';

const PostList = () => {
  const posts = allPosts;
  // console.log(posts);
  return (
    <>
      <div
        className="bg-primary/15 p-8"
        style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}
      >
        <section className="md:container mx-auto max-w-screen-lg justify-center">
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

          <div className="grid md:grid-cols-2 gap-4">
            {posts.map((post) => (
              <Link href={post.slug} className="whitespace-nowrap">
                <PostListItem key={post.title} post={post} />
              </Link>
            ))}
          </div>
          {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2"> */}
          {/* <div className="flex flex-col mx-auto items-center">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <Link href={post.slug} className="whitespace-nowrap">
                  <PostListItem key={post.title} post={post} />
                </Link>
              ))}
            </div>
          </div> */}
        </section>
      </div>
    </>
  );
};

export { PostList };
