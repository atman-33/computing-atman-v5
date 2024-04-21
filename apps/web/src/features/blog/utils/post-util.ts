import { Post } from 'contentlayer/generated';
import { SearchData } from '../types/search-data';

/**
 * 公開済み（published=true）のPostを返す。
 * @param posts
 * @returns
 */
export const filterPublishedPosts = <T extends (Post | SearchData)[]>(posts: T): T => {
  return posts.filter((post) => post.published) as T;
};

/**
 * 日付順もしくは最終更新日順に並べ替える。
 * @param posts
 * @returns
 */
export const sortPostsByDate = <T extends (Post | SearchData)[]>(posts: T): T => {
  return posts.sort((a, b) => {
    // lastmod プロパティが存在する場合はそれを使用して比較
    const dateA: any = a.lastmod ? new Date(a.lastmod) : new Date(a.date);
    const dateB: any = b.lastmod ? new Date(b.lastmod) : new Date(b.date);

    // 降順に並べ替える場合は b - a を使う
    return dateB - dateA;
  });
};
