import { Tag, TagIconKind } from '@/components/tag';
import { Badge } from '@repo/ui';
import { Post } from 'contentlayer/generated';

const PostTags = ({ post }: { post: Post }) => {
  if (!post.tags) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center space-x-2">
      {post.tags?.map((tag) => (
        <Badge key={tag} variant="outline" className="border-foreground/20 my-1">
          <Tag
            kind={tag as TagIconKind}
            href={`/blog/tags/${tag}`}
            className="flex text-xs"
            size={5}
          />
        </Badge>
      ))}
    </div>
  );
};

export { PostTags };
