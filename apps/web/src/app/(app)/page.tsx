import { DotFlasing } from '@/components/dot-flashing';
import { Link } from '@/components/link';
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from '@repo/ui';
import dynamic from 'next/dynamic';

const PostList = dynamic(
  () => import('@/features/blog/components/PostList').then((mod) => mod.PostList),
  { ssr: false, loading: () => <DotFlasing /> },
);

const IndexPage = () => {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <div>
        <Tabs defaultValue="blog">
          <TabsList>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="tech">Tech</TabsTrigger>
            <TabsTrigger value="explore">Explore</TabsTrigger>
          </TabsList>
          <TabsContent value="blog">
            <PostList />
          </TabsContent>
          <TabsContent value="tech">making contents...</TabsContent>
          <TabsContent value="explore">making contents...</TabsContent>
        </Tabs>
      </div>
      <div className="m-4">
        <Link href="/debug">
          <Button variant="default">Debug Room</Button>
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;
