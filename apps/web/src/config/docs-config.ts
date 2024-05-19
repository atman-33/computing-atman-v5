import { DocsConfig } from '@/types/docs';

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Tech',
      href: '/tech',
    },
    {
      title: 'App',
      href: '/app',
    },
    {
      title: 'About',
      href: '/about',
    },
  ],
  sidebarNav: [
    {
      title: 'Blog',
      items: [
        {
          title: 'Tags',
          href: '/blog/tags',
          items: [],
        },
      ],
    },
  ],
};
