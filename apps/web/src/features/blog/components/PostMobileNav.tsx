import { Breadcrumb } from '@/components/breadcrumb';
import { Toc } from '@/components/toc';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@repo/ui';
import { Post } from 'contentlayer/generated';

interface PostMobileNavProps {
  post: Post;
}

export const PostMobileNav = ({ post }: PostMobileNavProps) => {
  return (
    <div className="flex items-center justify-between md:container">
      <div className="hidden md:container md:flex">
        <Breadcrumb pageName={post?.title} />
      </div>
      <div className="flex md:hidden">
        <div className="ml-2 text-sm">{post?.title}</div>{' '}
      </div>
      <div className="relative flex lg:hidden">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contents</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="fixed right-2 top-32">
                  <Toc className="z-50 shadow-[0px_0px_8px_0px_rgba(0,0,0,0.3)]" />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};
