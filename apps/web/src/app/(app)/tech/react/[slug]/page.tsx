import { reactDocsConfig } from '@/config/tech/react-docs-config';
import { SidebarNavItem } from '@/types/nav';
import { ComponentKind, DocsComponent } from './_components/docs-component';

interface TechReactPageProps {
  params: {
    slug: string;
  };
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

  const nav = reactDocsConfig.sidebarNav[0];
  if (nav) {
    generateParamsRecursively(nav.items);
  }

  // console.log('staticParams =>', staticParams);
  return staticParams;
}

const TechReactPage = ({ params }: TechReactPageProps) => {
  return (
    <>
      <div className="mt-8">
        <DocsComponent kind={params.slug as ComponentKind} />
      </div>
    </>
  );
};

export default TechReactPage;
