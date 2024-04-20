import { Link } from '@/components/link';

const debugPages = [
  '/debug/001-shadcn-button',
  '/debug/002-graphql',
  '/debug/003-graphql-dummy-data',
  '/debug/004-contentlayer',
  '/debug/005-fetch',
];

const Page = () => {
  return (
    <div>
      {debugPages.map((page) => {
        return (
          <Link href={page} key={page}>
            <div key={page} className="bg-primary/20 my-4 rounded-md p-2">
              {page}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Page;
