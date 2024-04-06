import { Link } from '@/components/link';
import { Button } from '@repo/ui';

const Page = () => {
  return (
    <div className="container relative">
      <Link href="/debug">
        <Button variant="default">Debug Room</Button>
      </Link>
    </div>
  );
};

export default Page;
