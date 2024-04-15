import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <SiteHeader />
      <main className="flex-1 mx-auto mt-2">{children}</main>
      <SiteFooter />
    </div>
  );
}
