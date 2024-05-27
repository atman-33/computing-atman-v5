import { KanshoFooter, KanshoHeader } from '@/features/web-app-kansho';
import React from 'react';

interface KanshoLayoutProps {
  children: React.ReactNode;
}

const KanshoLayout = ({ children }: KanshoLayoutProps) => {
  return (
    <div className="mx-auto flex h-[100dvh] flex-col sm:max-w-screen-sm md:border">
      <div className="px-4 pt-2">
        <KanshoHeader />
      </div>
      <div className="flex-1 overflow-y-auto px-2 pt-2">{children}</div>
      <div>
        <KanshoFooter />
      </div>
    </div>
  );
};

export default KanshoLayout;
