import { DotFlasing } from '@/components/dot-flashing';
import { Link } from '@/components/link';
import { TagList } from '@/features/blog';
import { Button, SimpleTabsTrigger, Tabs, TabsContent, TabsList } from '@repo/ui';
import dynamic from 'next/dynamic';

const PostList = dynamic(
  () => import('@/features/blog/components/PostList').then((mod) => mod.PostList),
  { ssr: false, loading: () => <DotFlasing /> },
);

const IndexPage = () => {
  return (
    <div className="container mx-auto w-full md:w-10/12">
      <div>
        <Tabs defaultValue="blog">
          <TabsList className="bg-transparent">
            <SimpleTabsTrigger value="blog" className="w-16">
              Blog
            </SimpleTabsTrigger>
            <SimpleTabsTrigger value="tech" className="w-16">
              Tech
            </SimpleTabsTrigger>
            <SimpleTabsTrigger value="explore" className="w-16">
              Explore
            </SimpleTabsTrigger>
          </TabsList>
          <TabsContent value="blog">
            <PostList />
          </TabsContent>
          <TabsContent value="tech">making contents...</TabsContent>
          <TabsContent value="explore">
            <TagList />
          </TabsContent>
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
