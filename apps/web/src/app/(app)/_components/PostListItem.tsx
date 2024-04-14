import { type Post } from 'contentlayer/generated';

interface PostListItemProps {
  post: Post;
}

const PostListItem = (props: PostListItemProps) => {
  const post = props.post;

  return (
    <div className="flex space-x-4">
      <div className="text-5xl min-w-20 min-h-20 w-20 h-20 bg-white rounded-md flex items-center justify-center">
        <div>{post?.emoji}</div>
      </div>
      <div className="flex flex-col space-y-2">
        <div className="font-bold text-wrap overflow-x-hidden">{post?.title}</div>
        <div className="flex space-x-2">
          <div className="text-sm">tag1, tag2, tag3, ...</div>
          <div className="text-sm">更新日</div>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
