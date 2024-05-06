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
      title: '🌱 React Basics',
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
          label: '',
        },
        {
          title: 'multiple states',
          description: 'Reactで複数のuseStateを使用するサンプル',
          slug: 'multipleState',
          href: '/tech/react/multipleState',
          items: [],
          label: '',
        },
        {
          title: 'state of object',
          description: 'ReactでObjectを扱うサンプル',
          slug: 'stateObject',
          href: '/tech/react/stateObject',
          items: [],
          label: '',
        },
        {
          title: 'state of array',
          description: 'Reactで配列を扱うサンプル',
          slug: 'stateArray',
          href: '/tech/react/stateArray',
          items: [],
          label: '',
        },
        {
          title: 'state and props',
          description: 'Reactでstateとpropsを扱うサンプル',
          slug: 'stateAndProps',
          href: '/tech/react/stateAndProps',
          items: [],
          label: '',
        },
      ],
    },
    {
      title: '🦋 React Intermediate',
      items: [
        {
          title: 'list component',
          description: 'Reactでリストを表示するサンプル',
          slug: 'listComponent',
          href: '/tech/react/listComponent',
          items: [],
          label: '',
        },
        {
          title: 'list and filter',
          description: 'Reactでリストをフィルターして表示するサンプル',
          slug: 'listAndFilter',
          href: '/tech/react/listAndFilter',
          items: [],
          label: '',
        },
        {
          title: 'input and textarea',
          description: 'Reactで入力とテキストエリアを表示するサンプル',
          slug: 'inputTextarea',
          href: '/tech/react/inputTextarea',
          items: [],
          label: '',
        },
        {
          title: 'radio',
          description: 'Reactでラジオボタンを表示するサンプル',
          slug: 'radio',
          href: '/tech/react/radio',
          items: [],
          label: '',
        },
        {
          title: 'single checkbox',
          description: 'Reactでチェックボックスを表示するサンプル',
          slug: 'singleCheckbox',
          href: '/tech/react/singleCheckbox',
          items: [],
          label: '',
        },
        {
          title: 'multi checkbox',
          description: 'Reactで複数のチェックボックスを表示するサンプル',
          slug: 'multiCheckbox',
          href: '/tech/react/multiCheckbox',
          items: [],
          label: '',
        },
        {
          title: 'select',
          description: 'Reactでセレクトボックスを表示するサンプル',
          slug: 'select',
          href: '/tech/react/select',
          items: [],
          label: '',
        },
        {
          title: 'reminder',
          description: 'Reactでリマインダーを表示するサンプル',
          slug: 'reminder',
          href: '/tech/react/reminder',
          items: [],
          label: '',
        },
      ],
    },
  ],
};

/**
 * Reactのドキュメントの全ての項目
 */
export const reactDocsAllItems = reactDocsConfig.sidebarNav.flatMap((section) => section.items);
