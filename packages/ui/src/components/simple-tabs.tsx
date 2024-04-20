import * as React from 'react';
import { TabsTrigger } from './ui/tabs';

interface SimpleTabsProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

export const SimpleTabsTrigger = ({ children, value, className }: SimpleTabsProps) => {
  return (
    <TabsTrigger
      value={value}
      className={`data-[state=active]:border-b-foreground rounded-none data-[state=active]:border-b-2 ${className}`}
    >
      {children}
    </TabsTrigger>
  );
};
