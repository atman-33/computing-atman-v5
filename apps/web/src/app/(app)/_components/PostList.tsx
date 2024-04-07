import { Icons } from '@/components/icons';
import { Post } from '@/types/post';
import { Tooltip, TooltipContent, TooltipTrigger } from '@repo/ui';
import PostListItem from './PostListItem';

const articles: Post[] = [
  {
    title: 'Article 1',
    emoji: '🎉',
    tags: ['VBScript'],
    published: true,
    createdAt: new Date('2022-01-01'),
    updatedAt: new Date('2022-01-01'),
  },
  {
    title: 'Article 2',
    emoji: '🚢',
    tags: ['React'],
    published: true,
    createdAt: new Date('2022-01-01'),
    updatedAt: new Date('2022-01-01'),
  },
  {
    title: 'Article 3',
    emoji: '🐶',
    tags: ['Next.js'],
    published: true,
    createdAt: new Date('2022-01-01'),
    updatedAt: new Date('2022-01-01'),
  },
];

const PostList = () => {
  return (
    <>
      <div
        className="bg-primary/10 p-8"
        style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}
      >
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

        <div className="flex flex-wrap space-y-4 items-baseline">
          {articles.map((article) => (
            <PostListItem key={article.title} article={article} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostList;
