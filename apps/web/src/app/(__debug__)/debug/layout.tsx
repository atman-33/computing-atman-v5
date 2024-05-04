import { Link } from '@/components/link';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { webEnv } from '@/config/web-env';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-4">
      <SiteHeader />
      <main className="mx-auto mt-2 flex-1">{children}</main>
      <SiteFooter />
      {/* --- Debug Room ---- */}
      {webEnv.NEXT_PUBLIC_IS_DEV && (
        <div className="flex justify-center py-4">
          <Link
            href="/debug"
            className="bg-destructive/100 text-primary-foreground rounded-sm px-4 py-2"
          >
            Debug Room
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
