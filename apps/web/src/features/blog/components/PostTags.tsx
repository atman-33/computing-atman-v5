import Tag, { TagIconKind } from '@/components/tag';
import { Badge } from '@repo/ui';
import { Post } from 'contentlayer/generated';

const PostTags = ({ post }: { post: Post }) => {
  if (!post.tags) {
    return null;
  }

  return (
    <div className="flex space-x-2 flex-wrap">
      {post.tags?.map((tag) => (
        <Badge key={tag} variant="outline">
          <Tag kind={tag as TagIconKind} href={`/blog/tags/${tag}`} />
        </Badge>
      ))}
    </div>
  );
};

export { PostTags };
