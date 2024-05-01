import { MainNavItem, SidebarNavItem } from '@/types/nav';

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Blog Tags',
      href: '/blog/tags',
    },
  ],
  sidebarNav: [],
};
