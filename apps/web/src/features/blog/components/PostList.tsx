import { Icons } from '@/components/icons';
import { Tooltip, TooltipContent, TooltipTrigger } from '@repo/ui';
import { allPosts } from 'contentlayer/generated';
import { filterPublishedPosts, sortPostsByDate } from '../utils/post-util';
import { PostListItem } from './PostListItem';

const PostList = () => {
  let posts = allPosts;
  posts = filterPublishedPosts(posts);
  posts = sortPostsByDate(posts);
  // console.log(posts);
  return (
    <>
      <div
        className="bg-primary/15 p-8"
        style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}
      >
        <section className="mx-auto max-w-[1000px] justify-center">
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

          <div className="grid gap-4 md:grid-cols-2">
            {posts.map((post) => (
              <PostListItem key={post.title} post={post} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export { PostList };
