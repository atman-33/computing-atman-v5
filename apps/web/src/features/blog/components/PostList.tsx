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
      <div className="grid gap-x-2 md:grid-cols-2">
        {posts.map((post) => (
          <div className="my-4">
            <PostListItem key={post.title} post={post} />
          </div>
        ))}
      </div>
    </>
  );
};

export { PostList };
