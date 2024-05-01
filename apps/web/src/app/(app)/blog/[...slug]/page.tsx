import { Mdx } from '@/components/mdx-components';
import { ScrollTop } from '@/components/scroll-top/ScrollTop';
import { Toc } from '@/components/toc';
import { siteConfig } from '@/config/site-config';
import { PostHeader, PostMobileNav, PostTags } from '@/features/blog';
import { absoluteUrl } from '@/utils/url-util';
import { allPosts } from 'contentlayer/generated';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

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
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: absoluteUrl(post.slug),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.twitterCreator,
    },
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
      <div className="prose dark:prose-invert bg-primary/5 py-6 sm:p-2">
        <div className="sm:container">
          <PostHeader post={post} />

          <article className="lg:grid lg:grid-cols-10 ">
            <section className="bg-background flex flex-col space-y-4 p-4 sm:rounded-sm sm:p-8 lg:col-span-7">
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
