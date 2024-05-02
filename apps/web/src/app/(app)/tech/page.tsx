import { TechList } from '@/features/tech';

const TechPage = () => {
  return (
    <div className="my-8 flex flex-col space-y-4">
      <h3 className="self-center text-xl font-bold">Tech Articles</h3>
      <TechList />
    </div>
  );
};

export default TechPage;
