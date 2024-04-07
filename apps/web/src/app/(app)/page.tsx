import { Link } from '@/components/link';
import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from '@repo/ui';
import PostList from './_components/PostList';

const IndexPage = () => {
  return (
    <div className="container relative">
      <div>
        <Tabs defaultValue="posts">
          <TabsList>
            <TabsTrigger value="posts">Posts</TabsTrigger>
            <TabsTrigger value="tech">Tech</TabsTrigger>
            <TabsTrigger value="explore">Explore</TabsTrigger>
          </TabsList>
          <TabsContent value="posts">
            <PostList />
          </TabsContent>
          <TabsContent value="tech">...making contents...</TabsContent>
          <TabsContent value="explore">...making contents...</TabsContent>
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
