'use client';

import { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    const getSearchData = async () => {
      const response = await fetch('/search-data.json');
      const data = await response.json();
      console.log(data);
    };

    getSearchData();
  });

  return <div>Page</div>;
};

export default Page;
