const description = `
### 説明

コンポーネントに、状態とプロパティを渡すサンプルコード

### 利用するshadcn/uiコンポーネント

- button

### サンプルコード

~~~typescript
'use client';

import { Button } from '@repo/ui';
import { Dispatch, SetStateAction, useState } from 'react';

const Example = () => {
  const [toggle, setToggle] = useState(true);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const toggleComponent = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div className="mt-8">
        <Button onClick={toggleComponent}>Toggle</Button>
        {toggle ? (
          <Count key="A" title="A" count={countA} setCount={setCountA} />
        ) : (
          <Count key="B" title="B" count={countB} setCount={setCountB} />
        )}
      </div>
    </>
  );
};

const Count = (props: {
  title: string;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}) => {
  const countUp = () => {
    props.setCount((prevstate) => prevstate + 1);
  };

  const countDown = () => {
    props.setCount((prevstate) => prevstate - 1);
  };

  return (
    <>
      <h3>
        {props.title}: {props.count}
      </h3>
      <div className="flex space-x-4">
        <Button onClick={countUp}>+</Button>
        <Button onClick={countDown}>-</Button>
      </div>
    </>
  );
};

export { Example };
~~~

`;

export { description as StateAndPropsDescription };
