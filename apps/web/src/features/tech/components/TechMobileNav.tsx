import { DocsConfig } from '@/config/docs-config';

interface TechMobileNavProps {
  title: string;
  docsConfig: DocsConfig;
}

export const TechMobileNav = ({ title, docsConfig }: TechMobileNavProps) => {
  return <div className="flex items-center justify-between md:container">{title}</div>;
};
