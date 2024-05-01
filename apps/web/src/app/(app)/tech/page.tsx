import { TechList } from '@/features/tech';

const TechPage = () => {
  return (
    <div className="flex justify-center">
      <div className="my-8 flex flex-col space-y-4">
        <h3 className="ml-3 self-center text-xl font-bold">Tech</h3>
        <TechList />
      </div>
    </div>
  );
};

export default TechPage;
