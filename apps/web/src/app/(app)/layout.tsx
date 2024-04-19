import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <SiteHeader />
      <main className="mx-auto mt-2 flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
