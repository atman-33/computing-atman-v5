import { DocsSidebarNav } from '@/components/sidebar-nav/sidebar-nav';
import { reactDocsConfig } from '@/config/tech/react-docs-config';
import { TechMobileNav } from '@/features/tech';
import { ScrollArea } from '@repo/ui';
import React from 'react';

interface TechReactLayoutProps {
  children: React.ReactNode;
}

const TechReactLayout = ({ children }: TechReactLayoutProps) => {
  return (
    <div className="border-b">
      <div className="bg-background sticky top-0 z-40 border-b-2 p-2">
        <TechMobileNav docsConfig={reactDocsConfig} />
      </div>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full py-6 pr-6 lg:py-8">
            <DocsSidebarNav items={reactDocsConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  );
};

export default TechReactLayout;
