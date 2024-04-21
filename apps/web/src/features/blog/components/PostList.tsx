'use client';

import { Post } from 'contentlayer/generated';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { paginationAtom } from '../stores/pagination-atom';
import { filterPublishedPosts, sortPostsByDate } from '../utils/post-util';
import { PostListItem } from './PostListItem';
import { PostPagination } from './PostPagination';

/**
 * ページ毎の表示件数（ポスト数）
 */
const POSTS_PER_PAGE = 10;

interface PostListProps {
  posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
  const [pagination, setPagination] = useAtom(paginationAtom);

  posts = filterPublishedPosts(posts);
  posts = sortPostsByDate(posts);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const displayPosts = posts.slice(
    (pagination.currentPage - 1) * POSTS_PER_PAGE,
    pagination.currentPage * POSTS_PER_PAGE,
  );

  useEffect(() => {
    setPagination({
      currentPage: 1,
      totalPages,
      itemsPerPage: POSTS_PER_PAGE,
    });
  }, [totalPages, setPagination]);

  // console.log(posts);
  return (
    <>
      <div className="grid gap-x-4 md:grid-cols-2">
        {displayPosts.map((post) => (
          <div className="my-4">
            <PostListItem key={post.title} post={post} />
          </div>
        ))}
      </div>
      <PostPagination />
    </>
  );
};

export { PostList };
