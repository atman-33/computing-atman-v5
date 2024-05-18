'use client';

import originalSearchData from '@/config/@generated/search-data.json';
import { useEffect, useState } from 'react';
import { SearchData } from '../types/search-data';
import { filterPublishedPosts, sortPostsByDate } from '../utils/post-util';

export const useSearchData = () => {
  const [searchData, setSearchData] = useState<SearchData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchData = () => {
      try {
        // NOTE: publicフォルダにsearch-data.jsonを配置する場合は、こちらを使用する。
        // const response = await fetch('/search-data.json');
        // const jsonData = (await response.json()) as SearchData[];

        const jsonData = originalSearchData;

        let data = filterPublishedPosts(jsonData);
        data = sortPostsByDate(data);

        setSearchData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching search data:', error);
        setLoading(false);
      }
    };

    fetchSearchData();
  }, []);

  return { searchData, loading };
};
