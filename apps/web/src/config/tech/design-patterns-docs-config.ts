import { DocsConfig } from '@/types/docs';
import { docsConfig } from '../docs-config';

export const designPatternsDocsConfig: DocsConfig = {
  mainNav: docsConfig.mainNav,
  sidebarNav: [
    {
      title: '📐 GoFデザインパターン',
      items: [
        {
          title: 'Factory Method',
          description: 'Factory Methodでオブジェクトを生成するサンプル',
          slug: 'factoryMethod',
          href: '/tech/design-patterns/factoryMethod',
          items: [],
          label: '',
        },
      ],
    },
  ],
};

/**
 * デザインパターンのドキュメントの全ての項目
 */
export const designPatternsDocsAllItems = designPatternsDocsConfig.sidebarNav.flatMap(
  (section) => section.items,
);
