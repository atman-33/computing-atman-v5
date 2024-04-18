import { Mdx } from '@/components/mdx-components';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ScrollTop from '@/components/scroll-top/ScrollTop';
import { Toc } from '@/components/toc';
import { PostHeader, PostTags } from '@/features/blog';
import '@/styles/mdx.css';

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps['params']) {
  const slug = params?.slug?.join('/');
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-6 prose dark:prose-invert sm:p-2 bg-primary/10">
      <div className="sm:container">
        <PostHeader post={post} />

        <article className="grid md:grid-cols-10 ">
          <section className="bg-white dark:bg-zinc-950 p-4 sm:p-8 sm:rounded-sm flex flex-col space-y-4 col-span-7">
            <PostTags post={post} />
            <div className="content">
              <Mdx code={post.body.code} />
            </div>
          </section>
          <div className="hidden md:flex col-span-3 items-start">
            <Toc className="sticky top-20 min-w-72 ml-6" />
          </div>
        </article>
      </div>
      <div className="fixed bottom-4 right-4">
        <ScrollTop />
      </div>
    </div>
  );
}
