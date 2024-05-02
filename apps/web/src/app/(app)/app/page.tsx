import { AppList } from '@/features/app';

const AppPage = () => {
  return (
    <div className="my-8 flex flex-col space-y-4">
      <h3 className="self-center text-xl font-bold">Wep Applications</h3>
      <AppList />
    </div>
  );
};

export default AppPage;
