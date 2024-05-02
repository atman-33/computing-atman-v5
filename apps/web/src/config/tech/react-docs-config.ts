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
      title: '🌟React🌟',
      items: [
        {
          title: 'click handler',
          description: 'Reactでクリック時に処理を実行するサンプル',
          slug: 'clickHandler',
          href: '/tech/react/clickHandler',
          items: [],
          label: 'New',
        },
      ],
    },
  ],
};
