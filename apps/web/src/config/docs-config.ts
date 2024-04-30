import { MainNavItem, SidebarNavItem } from '@/types/nav';

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Posts',
      href: '/posts',
    },
    {
      title: 'Tech',
      href: '/tech',
    },
    {
      title: 'Explore',
      href: '/explore',
    },
  ],
  sidebarNav: [
    {
      title: 'React Samples',
      items: [
        {
          title: 'useState',
          href: '/xxx/xxx/xxx',
          items: [],
          label: 'New',
        },
      ],
    },
  ],
};
