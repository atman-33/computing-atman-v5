import { LoginButton } from '@/components//login-button';
import { CommandMenu } from '@/components/command-menu';
import { Icons } from '@/components/icons';
import { Link } from '@/components/link';
import { MainNav } from '@/components/main-nav';
import { MobileNav } from '@/components/mobile-nav';
import { ModeToggle } from '@/components/mode-toggle';
import { docsConfig } from '@/config/docs-config';
import { siteConfig } from '@/config/site-config';
import { buttonVariants, cn } from '@repo/ui';

export function SiteHeader() {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 top-0 z-50 mx-auto flex justify-center border-b backdrop-blur">
      <div className="mx-4 flex h-14 w-full items-center justify-center md:container md:w-10/12">
        <MainNav />
        <MobileNav docsConfig={docsConfig} />
        <Link href="/">
          <span className="ml-2 text-nowrap text-lg font-bold md:text-xl">{siteConfig.name}</span>
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="hidden items-center sm:flex">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'w-9 px-0',
                )}
              >
                <Icons.twitter className="h-3 w-3 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
          <div className="flex items-center space-x-2">
            <LoginButton />
          </div>
        </div>
      </div>
    </header>
  );
}
