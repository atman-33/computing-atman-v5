import { Icons } from '@/components/icons';
import { Link } from '@/components/link';
import { PostList, TagList } from '@/features/blog';
import {
  SimpleTabsTrigger,
  Tabs,
  TabsContent,
  TabsList,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@repo/ui';
import { allPosts } from 'contentlayer/generated';

// NOTE: dynamic import は、client component に対応していないため利用を中止。
// const PostList = dynamic(
//   () => import('@/features/blog/components/PostList').then((mod) => mod.PostList),
//   { ssr: false, loading: () => <DotFlasing /> },
// );

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
            <div
              className="bg-foreground/15 p-8"
              style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}
            >
              <section className="mx-auto max-w-[1000px] justify-center">
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-3xl font-bold">Latest</h3>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Icons.question className="h-4 w-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>These are articles related to programming and IT-related blog posts.</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
                <span className="m-4" />
                <PostList posts={allPosts} />
              </section>
            </div>
          </TabsContent>
          <TabsContent value="tech">making contents...</TabsContent>
          <TabsContent value="explore" className="py-8">
            <TagList />
          </TabsContent>
        </Tabs>
        <div className="my-8">
          <Link href="/debug" className="bg-primary/10 m-0 rounded-md p-4">
            Debug Room
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
