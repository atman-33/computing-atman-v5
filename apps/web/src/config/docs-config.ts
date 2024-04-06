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
      title: 'Samples...',
      items: [
        {
          title: 'Accordion',
          href: '/docs/components/accordion',
          items: [],
          label: 'New',
        },
        {
          title: 'Alert',
          href: '/docs/components/alert',
          items: [],
        },
        {
          title: 'Alert Dialog',
          href: '/docs/components/alert-dialog',
          items: [],
        },
      ],
    },
  ],
};
