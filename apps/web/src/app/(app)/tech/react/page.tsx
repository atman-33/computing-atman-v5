import { Icon } from '@/components/icons';
import { DocsSidebarNav } from '@/components/sidebar-nav';
import { siteConfig } from '@/config/site-config';
import { reactDocsConfig } from '@/config/tech/react-docs-config';
import { absoluteUrl } from '@/utils/url-util';
import type { Metadata } from 'next';

const title = 'React Samples';
const description = 'Next.js + React + Tailwind CSS + Shadcn のサンプルコードを公開しています。';

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: 'article',
    url: absoluteUrl('tech/react'),
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

const ReactPage = () => {
  return (
    <>
      <div className="mt-8 flex flex-col space-y-8">
        <h2 className="text-3xl font-bold">Introduction</h2>
        <p>React - A JavaScript library for building user interfaces -</p>
        <p>Next.js + React + Tailwind CSS + Shadcn のサンプルコードを公開しています。</p>
        <Icon kind="react" size={24} />
        <div className="md:hidden">
          <DocsSidebarNav items={reactDocsConfig.sidebarNav} />
        </div>
      </div>
    </>
  );
};

export default ReactPage;
