import { webEnv } from '@/config/web-env';

const Page = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-3xl font-bold">Web Environment</h1>
      <div>NEXT_PUBLIC_IS_DEV: {webEnv.NEXT_PUBLIC_IS_DEV ? 'true' : 'false'}</div>
      <div>NEXT_PUBLIC_APP_URL: {webEnv.NEXT_PUBLIC_APP_URL}</div>
      <div>NEXT_PUBLIC_API_ENDPOINT: {webEnv.NEXT_PUBLIC_API_ENDPOINT}</div>
      <div>NEXT_PUBLIC_API_GQL_URL: {webEnv.NEXT_PUBLIC_API_GQL_URL}</div>
      <div>NEXT_PUBLIC_GA_ID: {webEnv.NEXT_PUBLIC_GA_ID}</div>
    </div>
  );
};

export default Page;
