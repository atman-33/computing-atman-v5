import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getDocFromParams({ params }: PostPageProps) {
  const slug = params.slug?.join('/') || '';
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    return null;
  }

  return post;
}

export async function generateStaticParams(): Promise<PostPageProps['params'][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split('/'),
  }));
}

const PostPage = async (params: PostPageProps) => {
  console.log(`params: ${JSON.stringify(params)}`);
  const post = await getDocFromParams(params);
  console.log(post);

  const MDXContent = useMDXComponent(post?.body.code ?? '');

  return (
    <div>
      <MDXContent />
    </div>
  );
};

export default PostPage;
