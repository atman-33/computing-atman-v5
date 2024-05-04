import { Icons } from '@/components/icons';
import { Button, Input } from '@repo/ui';

const mockData = [
  {
    id: 1,
    title: 'ワンピース',
    currentChapter: 1000,
    score: 4.5,
    completed: 0,
  },
  {
    id: 2,
    title: 'NARUTO',
    currentChapter: 600,
    score: 4.8,
    completed: 1,
  },
];

export const DokuhaList = () => {
  return (
    <>
      <Input type="email" placeholder="🔍 Input title..." />
      <div className="flex items-center space-x-4">
        <Button variant={'ghost'} className="m-1 h-8 w-8 rounded-full p-1">
          <Icons.sort className="h-6 w-6 fill-current" />
        </Button>
        <div>***TODO:ソート条件を表示***</div>
      </div>
    </>
  );
};
