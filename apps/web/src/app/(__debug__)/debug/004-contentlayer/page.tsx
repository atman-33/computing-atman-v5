'use client';

import { allPosts } from 'contentlayer/generated';
import React, { useEffect } from 'react';

const Page = () => {
  const [slugs, setSlugs] = React.useState<string>();
  const [slugsAsParams, setSlugsAsParams] = React.useState<string>();

  useEffect(() => {
    const arrayOfSlug = allPosts.map((post) => post.slug);
    setSlugs(arrayOfSlug.join(', '));

    const arrayOfSlugAsParams = allPosts.map((post) => post.slugAsParams);
    setSlugsAsParams(arrayOfSlugAsParams.join(', '));
  }, []);

  return (
    <div>
      <h3>slug</h3>
      <p>{slugs}</p>

      <br />

      <h3>slugAsParams</h3>
      <p>{slugsAsParams}</p>
    </div>
  );
};

export default Page;
