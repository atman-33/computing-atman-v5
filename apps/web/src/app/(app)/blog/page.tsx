'use client';

import { DotFlashing } from '@/components/dot-flashing';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const BlogPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/blog/tags');
  });

  return (
    <div className="flex flex-col items-center">
      <div className="m-8">Now redirecting...</div>
      <DotFlashing />
    </div>
  );
};

export default BlogPage;
