import { Image } from '@/components/image';

const Example = (): JSX.Element => {
  return (
    <>
      <h3 className="font-bold">クラス図</h3>
      <Image
        src="/tech/design-patterns/factory-method.png"
        alt="クラス図"
        width={800}
        height={600}
      />
    </>
  );
};

export { Example as FactoryMethodExample };
