'use client';

import originalTagData from '@/config/@generated/tag-data.json';
import { useEffect, useState } from 'react';

export const useTagData = () => {
  const [tagData, setTagData] = useState<[string, number][] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTagData = () => {
      try {
        // NOTE: publicフォルダにtag-data.jsonを配置する場合は、こちらを使用する。
        // const response = await fetch('/tag-data.json');
        // let jsonData = await response.json();
        // console.log('🐜 jsonData:', jsonData);

        let jsonData = originalTagData;

        const arrayData = Object.entries<number>(jsonData);
        // console.log('🐜 arrayData', arrayData);

        const sortedData = arrayData.sort((a, b) => b[1] - a[1]);
        // console.log('🐜 sortedData', sortedData);

        setTagData(sortedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching search data:', error);
        setLoading(false);
      }
    };

    fetchTagData();
  }, []);

  return { tagData, loading };
};
