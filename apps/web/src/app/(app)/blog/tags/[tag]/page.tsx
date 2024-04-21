import Tag, { TagIconKind } from '@/components/tag';
import { PostList, filterPublishedPosts, sortPostsByDate } from '@/features/blog';
import { allPosts } from 'contentlayer/generated';
import tagData from '../../../../../../public/tag-data.json';

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
      <section className="mx-auto max-w-[1000px] justify-center">
        <div className="flex flex-col items-baseline space-y-4">
          <h3 className="pl-4 text-3xl font-bold">
            <Tag size={10} kind={tag as TagIconKind} className="flex text-lg font-bold" />
          </h3>
          <hr className="bg-secondary w-full justify-center border-[1px]" />
          <PostList posts={posts} />
        </div>
      </section>
    </div>
  );
};

export default TagPage;
