import { Breadcrumb } from '@/components/breadcrumb';
import { MobileNav } from '@/components/mobile-nav';
import { DocsConfig } from '@/types/docs';
import { Button } from '@repo/ui';

interface TechMobileNavProps {
  title?: string;
  docsConfig: DocsConfig;
}

export const TechMobileNav = ({ title, docsConfig }: TechMobileNavProps) => {
  return (
    <div className="flex items-center justify-between md:container">
      {title !== undefined ? <Breadcrumb pageName={title} /> : <Breadcrumb />}

      <MobileNav side="right" docsConfig={docsConfig}>
        <Button variant="ghost">Contents</Button>
      </MobileNav>
    </div>
  );
};
