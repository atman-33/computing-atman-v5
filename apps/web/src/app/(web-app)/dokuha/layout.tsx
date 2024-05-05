import { DokuhaFooter, DokuhaHeader } from '@/features/web-app-dokuha';
import React from 'react';

interface DokuhaLayoutProps {
  children: React.ReactNode;
}

const DokuhaLayout = ({ children }: DokuhaLayoutProps) => {
  return (
    <div className="mx-auto ml-0 flex h-[100dvh] flex-col">
      <div className="px-4 py-2">
        <DokuhaHeader />
      </div>
      <div className="flex-1 overflow-y-auto px-2">{children}</div>
      <div>
        <DokuhaFooter />
      </div>
    </div>
  );
};

export default DokuhaLayout;
