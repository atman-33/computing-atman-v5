import { Post } from 'contentlayer/generated';
import { filterPublishedPosts, sortPostsByDate } from '../utils/post-util';
import { PostListItem } from './PostListItem';

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  posts = filterPublishedPosts(posts);
  posts = sortPostsByDate(posts);
  // console.log(posts);
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <PostListItem key={post.title} post={post} />
        ))}
      </div>
    </>
  );
};

export { PostList };
