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
          label: '',
        },
        {
          title: 'input',
          description: 'Reactで入力時に処理を実行するサンプル',
          slug: 'input',
          href: '/tech/react/input',
          items: [],
          label: '',
        },
        {
          title: 'hover',
          description: 'Reactでマウスオーバー時に処理を実行するサンプル',
          slug: 'hover',
          href: '/tech/react/hover',
          items: [],
          label: '',
        },
        {
          title: 'useState',
          description: 'ReactでuseStateを使用するサンプル',
          slug: 'useState',
          href: '/tech/react/useState',
          items: [],
          label: 'New',
        },
      ],
    },
  ],
};
