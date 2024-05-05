import { Icons } from '@/components/icons';
import { PostList } from '@/features/blog';
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
import AboutPage from './about/page';
import AppPage from './app/page';
import TagsPage from './blog/tags/page';
import TechPage from './tech/page';

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
          <TabsList className="bg-primary-foreground/30 sticky top-0 z-10 rounded-none backdrop-blur">
            <SimpleTabsTrigger value="blog" className="w-16">
              Blog
            </SimpleTabsTrigger>
            <SimpleTabsTrigger value="tech" className="w-16">
              Tech
            </SimpleTabsTrigger>
            <SimpleTabsTrigger value="app" className="w-16">
              App
            </SimpleTabsTrigger>
            <SimpleTabsTrigger value="explore" className="w-16">
              Explore
            </SimpleTabsTrigger>
            <SimpleTabsTrigger value="about" className="w-16">
              About
            </SimpleTabsTrigger>
          </TabsList>
          <TabsContent value="blog">
            {/* NOTE: md以上は、スクロールバー幅を考慮して左右マージンに6pxを上乗せしている。 */}
            <div className="bg-primary/10 ml-[calc(-50dvw+50%)] mr-[calc(-50dvw+50%)] p-8 md:ml-[calc(-50dvw+50%+6px)] md:mr-[calc(-50dvw+50%+6px)]">
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
          <TabsContent value="tech">
            <TechPage />
          </TabsContent>
          <TabsContent value="app">
            <AppPage />
          </TabsContent>
          <TabsContent value="explore">
            <TagsPage />
          </TabsContent>
          <TabsContent value="about">
            <AboutPage />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IndexPage;
