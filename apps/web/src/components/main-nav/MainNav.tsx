'use client';

import Link from 'next/link';
// import { usePathname } from 'next/navigation';

import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site-config';
import { cn } from '@repo/ui';

export function MainNav() {
  // const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold text-2xl sm:inline-block">{siteConfig.name}</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {/* 
        // NOTE: リンクを増やす場合は、こちらに追記していく。 
        <Link
          href="/docs"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/docs' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Docs
        </Link> */}
        <Link
          href={siteConfig.links.github}
          className={cn(
            'hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block',
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  );
}
