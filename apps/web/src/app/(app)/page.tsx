import { Link } from '@/components/link';
import { PostList } from '@/features/blog';
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from '@repo/ui';

const IndexPage = () => {
  return (
    <div className="container mx-auto">
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
