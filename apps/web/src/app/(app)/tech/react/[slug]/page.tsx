import { siteConfig } from '@/config/site-config';
import { reactDocsAllItems } from '@/config/tech/react-docs-config';
import { SidebarNavItem } from '@/types/nav';
import { absoluteUrl } from '@/utils/url-util';
import { Metadata } from 'next';
import { ComponentKind } from './_components/components';
import { DocsComponent } from './_components/docs-component';

interface TechReactPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: TechReactPageProps): Promise<Metadata> {
  const metaData: Metadata = {};

  if (reactDocsAllItems.length > 0) {
    const item = reactDocsAllItems.find((item) => item.slug === params.slug);

    return {
      title: item?.title,
      description: item?.description,
      openGraph: {
        title: item?.title,
        description: item?.description,
        type: 'article',
        url: absoluteUrl(item?.href ?? ''),
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
        title: item?.title,
        description: item?.description,
        images: [siteConfig.ogImage],
        creator: siteConfig.twitterCreator,
      },
    };
  }

  return metaData;
}

export async function generateStaticParams(): Promise<TechReactPageProps['params'][]> {
  const staticParams: any = [];

  const generateParamsRecursively = (items: SidebarNavItem[]) => {
    items.forEach((item) => {
      staticParams.push({
        slug: item.slug,
      });

      if (item.items && item.items.length > 0) {
        generateParamsRecursively(item.items);
      }
    });
  };

  if (reactDocsAllItems.length > 0) {
    generateParamsRecursively(reactDocsAllItems);
  }

  // console.log('staticParams =>', staticParams);
  return staticParams;
}

const TechReactPage = ({ params }: TechReactPageProps) => {
  return (
    <>
      <div className="my-8">
        <DocsComponent kind={params.slug as ComponentKind} />
      </div>
    </>
  );
};

export default TechReactPage;
