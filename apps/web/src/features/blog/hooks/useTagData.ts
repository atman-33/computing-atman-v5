'use client';

import { useEffect, useState } from 'react';

export const useTagData = () => {
  const [tagData, setTagData] = useState<[string, number][] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTagData = async () => {
      try {
        const response = await fetch('/tag-data.json');
        let jsonData = await response.json();
        // console.log('🐜 jsonData:', jsonData);

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
