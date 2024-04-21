'use client';

import { DotFlasing } from '@/components/dot-flashing';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const BlogPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push('/');
  });

  return (
    <div className="flex flex-col items-center">
      <div className="m-8">Now redirecting...</div>
      <DotFlasing />
    </div>
  );
};

export default BlogPage;
