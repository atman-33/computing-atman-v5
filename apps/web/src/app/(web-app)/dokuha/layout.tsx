import { DokuhaFooter, DokuhaHeader } from '@/features/web-app-dokuha';
import React from 'react';

interface DokuhaLayoutProps {
  children: React.ReactNode;
}

const DokuhaLayout = ({ children }: DokuhaLayoutProps) => {
  return (
    <div className="mx-auto ml-0 flex flex-col">
      <div className="p-4">
        <DokuhaHeader />
      </div>
      <div className="p-2">{children}</div>
      <DokuhaFooter />
    </div>
  );
};

export default DokuhaLayout;
