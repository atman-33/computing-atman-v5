import { Icon } from '@/components/icons';
import { DocsSidebarNav } from '@/components/sidebar-nav';
import { siteConfig } from '@/config/site-config';
import { designPatternsDocsConfig } from '@/config/tech/design-patterns-docs-config';
import { absoluteUrl } from '@/utils/url-util';
import type { Metadata } from 'next';

const title = 'デザインパターン';
const description = '各種デザインパターンのサンプルコードを公開しています。';

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'article',
    url: absoluteUrl('tech/design-patterns'),
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterCreator,
  },
};

const TechDesignPatternsPage = () => {
  return (
    <>
      <div className="mt-8 flex flex-col space-y-8">
        <h2 className="text-3xl font-bold">Introduction</h2>
        <p>各種デザインパターンのサンプルコードを公開しています。</p>
        <Icon kind="design" size={24} />
        <div className="md:hidden">
          <DocsSidebarNav items={designPatternsDocsConfig.sidebarNav} />
        </div>
      </div>
    </>
  );
};

export default TechDesignPatternsPage;
