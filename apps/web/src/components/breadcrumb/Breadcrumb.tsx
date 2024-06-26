'use client';

import { getLastSegment, parsePath } from '@/utils/url-util';
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Breadcrumb as ShadcnBreadcrumb,
} from '@repo/ui';
import { usePathname } from 'next/navigation';

interface BreadcrumbProps {
  pageName?: string;
}

export const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  const pathname = usePathname();
  const paths = parsePath(pathname);
  // console.log(paths);

  return (
    <ShadcnBreadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {paths.map((path, index, arr) => (
          <div className="flex items-center space-x-2" key={index}>
            <BreadcrumbSeparator />

            {index < arr.length - 1 && (
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={`${path}`}>{getLastSegment(path)}</BreadcrumbLink>
              </BreadcrumbItem>
            )}
            {index === arr.length - 1 && (
              <BreadcrumbItem key={index}>
                <BreadcrumbPage>{pageName || getLastSegment(path)}</BreadcrumbPage>
              </BreadcrumbItem>
            )}
          </div>
        ))}
      </BreadcrumbList>
    </ShadcnBreadcrumb>
  );
};
