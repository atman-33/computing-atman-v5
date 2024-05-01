'use client';

import * as React from 'react';

import { DocsConfig } from '@/config/docs-config';
import { siteConfig } from '@/config/site-config';
import { Button, ScrollArea, Separator, Sheet, SheetContent, SheetTrigger } from '@repo/ui';
import { Logo } from '../logo';
import { MobileLink } from './MobileLink';

interface MobileNavProps {
  docsConfig: DocsConfig;
  children?: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
}

export function MobileNav({ docsConfig, children, side }: MobileNavProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          {children || (
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <Logo />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          )}
        </SheetTrigger>
        <SheetContent side={side ?? 'left'} className="pr-0">
          <MobileLink href="/" className="flex items-center space-x-2" onOpenChange={setOpen}>
            <Logo />
            <span className="font-bold">{siteConfig.name}</span>
          </MobileLink>
          <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
            <div className="flex flex-col space-y-3">
              {docsConfig.mainNav?.map(
                (item) =>
                  item.href && (
                    <MobileLink key={item.href} href={item.href} onOpenChange={setOpen}>
                      {item.title}
                    </MobileLink>
                  ),
              )}
            </div>
            <div className="flex flex-col space-y-2">
              {docsConfig.sidebarNav.map((item, index) => (
                <div key={index} className="flex flex-col space-y-3 pt-6">
                  <Separator />
                  <h4 className="font-medium">{item.title}</h4>
                  {item?.items?.length &&
                    item.items.map((item) => (
                      <React.Fragment key={item.href}>
                        {!item.disabled &&
                          (item.href ? (
                            <MobileLink
                              href={item.href}
                              onOpenChange={setOpen}
                              className="text-muted-foreground"
                            >
                              {item.title}
                              {item.label && (
                                <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                                  {item.label}
                                </span>
                              )}
                            </MobileLink>
                          ) : (
                            item.title
                          ))}
                      </React.Fragment>
                    ))}
                </div>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
