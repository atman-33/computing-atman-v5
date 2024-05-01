import { Icon } from '@/components/icons';

const ReactPage = () => {
  return (
    <>
      <div className="mt-8 flex flex-col space-y-8">
        <h2 className="text-3xl font-bold">Introduction</h2>
        <p>Reactのサンプルコードを公開しています。</p>
        <Icon kind="react" size={24} />
      </div>
    </>
  );
};

export default ReactPage;
