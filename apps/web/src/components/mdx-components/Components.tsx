import './mdx.css';

import { Image } from '@/components/image';
import { Link } from '@/components/link';
import { cn } from '@repo/ui';
import { CopyButton } from './CopyButton';

export const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn('font-heading mt-2 scroll-m-20 break-words text-4xl font-bold', className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        'font-heading mt-12 scroll-m-20 break-words border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0',
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        'font-heading mt-8 scroll-m-20 break-words text-xl font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        'font-heading mt-8 scroll-m-20 break-words text-lg font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn('mt-8 scroll-m-20 break-words text-lg font-semibold tracking-tight', className)}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 break-words text-base font-semibold tracking-tight',
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      target="_blank"
      rel="noreferrer"
      className={cn('font-medium underline underline-offset-4', className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)} {...props} />
  ),
  img: ({ className, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn('rounded-md', className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn('even:bg-muted m-0 border-t p-0', className)} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className,
      )}
      {...props}
    />
  ),
  figure: ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <figure className={cn('', className)} {...props} />
  ),
  pre: ({
    className,
    __rawString__,
    __withMeta__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __rawString__?: string;
    __withMeta__?: boolean;
  }) => {
    return (
      <div className="mt-6 rounded-sm bg-zinc-600" style={{ display: 'grid' }}>
        {/* NOTE: For debug => <p>rawString: {__rawString__}</p> */}
        {__rawString__ && (
          <CopyButton
            value={__rawString__}
            className={cn('mr-6 mt-1 justify-self-end', __withMeta__)}
            style={{ gridArea: '1 / 1' }}
          />
        )}
        <pre
          className={cn(
            // 'mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-sm border bg-zinc-950 py-4 dark:bg-zinc-900',
            'max-h-[650px] overflow-x-auto rounded-b-sm px-2 py-2',
            className,
          )}
          style={{ gridArea: '1 / 1' }}
          {...props}
        ></pre>
      </div>
    );
  },
  code: ({
    className,
    __isInlineCode__,
    ...props
  }: React.HTMLAttributes<HTMLElement> & {
    __isInlineCode__?: string;
  }) => {
    return (
      <>
        {__isInlineCode__ ? (
          <code
            className={cn(
              // 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm bg-zinc-950 dark:bg-zinc-900 text-white',
              'bg-muted m-1 rounded bg-slate-200 px-[0.3rem] py-[0.2rem] font-mono text-sm text-black dark:bg-slate-800 dark:text-white',
              className,
            )}
            {...props}
          />
        ) : (
          <code
            className={cn(
              'bg-muted rounded bg-[#22272e] px-[0.3rem] py-[0.2rem] font-mono text-sm text-white',
              className,
            )}
            {...props}
          />
        )}
      </>
    );
  },
  Image,
  Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link className={cn('font-medium underline underline-offset-4', className)} {...props} />
  ),
  LinkedCard: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        'bg-card text-card-foreground hover:bg-muted/50 flex w-full flex-col items-center rounded-xl border p-6 shadow transition-colors sm:p-10',
        className,
      )}
      {...props}
    />
  ),
};
