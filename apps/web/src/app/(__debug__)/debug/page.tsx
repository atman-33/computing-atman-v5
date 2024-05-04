import { Link } from '@/components/link';

const debugPages = [
  '/debug/001-shadcn-button',
  '/debug/002-graphql',
  '/debug/003-graphql-dummy-data',
  '/debug/004-contentlayer',
  '/debug/005-fetch',
  '/debug/006-nextjs-search-param?search=foo',
  '/debug/007-tailwindcss-color',
  '/debug/008-web-env',
  '/debug/009-auth-test',
  '/debug/010-auth-hook-test',
];

const Page = () => {
  return (
    <div>
      {debugPages.map((page) => {
        return (
          <Link href={page} key={page}>
            <div key={page} className="bg-primary/20 my-4 rounded-sm p-2">
              {page}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Page;
