import { AppList } from '@/features/app';
import { Separator } from '@repo/ui';

const AppPage = () => {
  return (
    <div className="my-8 flex flex-col space-y-4">
      <h3 className="self-center text-xl font-bold">Wep Applications</h3>
      <Separator orientation="horizontal" />
      <AppList />
    </div>
  );
};

export default AppPage;
