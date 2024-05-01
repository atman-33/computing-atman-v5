'use client';

import { DotFlasing } from '@/components/dot-flashing';
import { Link } from '@/components/link';
import { Tag, TagIconKind } from '@/components/tag';
import { Badge } from '@repo/ui';
import { useTagData } from '../hooks/useTagData';

export const TagList = () => {
  const { loading, tagData } = useTagData();

  if (loading) {
    return <DotFlasing />;
  }

  return (
    <div className="mx-auto flex max-w-[1000px] flex-col space-y-2">
      <h3 className="ml-3 text-xl font-bold">Blog Tags</h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {tagData && (
          <>
            {(tagData as unknown as any).map(([tag, count]: [string, number]) => (
              <Link href={`/blog/tags/${tag}`} key={tag}>
                <div
                  key={tag}
                  className="mx-3 my-3 flex h-24 max-w-32 flex-col items-center justify-between rounded-lg border-[1px] py-2"
                >
                  <Tag
                    size={10}
                    kind={tag as TagIconKind}
                    className="flex flex-col text-nowrap text-center text-sm"
                  />
                  <Badge className="bg-accent" variant="outline">
                    {count}
                  </Badge>
                </div>
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
