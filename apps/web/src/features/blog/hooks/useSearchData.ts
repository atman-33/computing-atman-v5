'use client';

import { useEffect, useState } from 'react';
import { SearchData } from '../types/search-data';
import { filterPublishedPosts, sortPostsByDate } from '../utils/post-util';

export const useSearchData = () => {
  const [searchData, setSearchData] = useState<SearchData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchData = async () => {
      try {
        const response = await fetch('/search-data.json');
        let data = (await response.json()) as SearchData[];

        data = filterPublishedPosts(data);
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
