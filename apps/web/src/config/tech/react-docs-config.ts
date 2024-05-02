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
        {
          title: 'input',
          description: 'Reactで入力時に処理を実行するサンプル',
          slug: 'input',
          href: '/tech/react/input',
          items: [],
          label: 'New',
        },
        {
          title: 'hover',
          description: 'Reactでマウスオーバー時に処理を実行するサンプル',
          slug: 'hover',
          href: '/tech/react/hover',
          items: [],
          label: 'New',
        },
      ],
    },
  ],
};
