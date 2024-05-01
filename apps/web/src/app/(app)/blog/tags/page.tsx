import { TagList } from '@/features/blog';

const TagsPage = () => {
  return (
    <div className="my-8 flex flex-col space-y-4">
      <h3 className="ml-3 self-center text-xl font-bold">Blog Tags</h3>
      <TagList />
    </div>
  );
};

export default TagsPage;
