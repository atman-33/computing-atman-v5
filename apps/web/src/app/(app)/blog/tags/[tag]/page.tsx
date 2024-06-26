import { Icons } from '@/components/icons';
import { Link } from '@/components/link';
import { Tag, TagIconKind } from '@/components/tag';
import tagData from '@/config/@generated/tag-data.json';
import { PostList, filterPublishedPosts, sortPostsByDate } from '@/features/blog';
import { allPosts } from 'contentlayer/generated';

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const paths = tagKeys.map((tag) => ({
    tag: tag,
  }));
  return paths;
};

const TagPage = ({ params }: { params: { tag: string } }) => {
  const tag = decodeURI(params.tag);

  let posts = filterPublishedPosts(allPosts);
  posts = sortPostsByDate(posts);
  posts = posts.filter((post) => post.tags && post.tags.includes(tag));

  return (
    <div className="py-8">
      <section className="mx-auto max-w-[1000px]">
        <div className="flex flex-col items-baseline space-y-4">
          <div className="flex items-center space-x-2 pl-4">
            <Link href={`/blog/tags`}>
              <div>tags</div>
            </Link>
            <Icons.right className="h-4 w-4" />
            <div>
              <Tag
                size={10}
                kind={tag as TagIconKind}
                className="mt-1 flex flex-nowrap items-center text-lg font-bold"
              />
            </div>
          </div>
          <hr className="bg-secondary w-full justify-center border-[1px]" />
          <PostList posts={posts} />
        </div>
      </section>
    </div>
  );
};

export default TagPage;
