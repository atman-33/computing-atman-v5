import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-4">
      <SiteHeader />
      <main className="mx-auto mt-2 flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default Layout;
