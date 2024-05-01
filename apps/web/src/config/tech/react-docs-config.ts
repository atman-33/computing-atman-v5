import { MainNavItem, SidebarNavItem } from '@/types/nav';

import { docsConfig } from '../docs-config';

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const reactDocsConfig: DocsConfig = {
  mainNav: docsConfig.mainNav,
  sidebarNav: [
    {
      title: '🚀🚀🚀',
      items: [
        {
          title: 'click handler',
          slug: 'clickHandler',
          href: '/tech/react/clickHandler',
          items: [],
          label: 'New',
        },
      ],
    },
  ],
};
