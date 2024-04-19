import { Mdx } from '@/components/mdx-components';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ScrollTop from '@/components/scroll-top/ScrollTop';
import { Toc } from '@/components/toc';
import { PostHeader, PostMobileNav, PostTags } from '@/features/blog';
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
    <>
      <div className="bg-background sticky top-0 border-b-2 p-2">
        <PostMobileNav post={post} />
      </div>
      <div className="prose dark:prose-invert bg-primary/10 py-6 sm:p-2">
        <div className="sm:container">
          <PostHeader post={post} />

          <article className="lg:grid lg:grid-cols-10 ">
            <section className="flex flex-col space-y-4 bg-white p-4 sm:rounded-sm sm:p-8 lg:col-span-7 dark:bg-zinc-950">
              <PostTags post={post} />
              <div className="content">
                <Mdx code={post.body.code} />
              </div>
            </section>
            <div className="hidden items-start lg:col-span-3 lg:flex">
              <Toc className="sticky top-20 ml-6 min-w-72" />
            </div>
          </article>
        </div>
        <div className="fixed bottom-4 right-4">
          <ScrollTop />
        </div>
      </div>
    </>
  );
}
