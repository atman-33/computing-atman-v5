import { Icon } from '@/components/icons';
import { DocsSidebarNav } from '@/components/sidebar-nav/sidebar-nav';
import { reactDocsConfig } from '@/config/tech/react-docs-config';

const ReactPage = () => {
  return (
    <>
      <div className="mt-8 flex flex-col space-y-8">
        <h2 className="text-3xl font-bold">Introduction</h2>
        <p>Reactのサンプルコードを公開しています。</p>
        <Icon kind="react" size={24} />
        <div className="md:hidden">
          <DocsSidebarNav items={reactDocsConfig.sidebarNav} />
        </div>
      </div>
    </>
  );
};

export default ReactPage;
