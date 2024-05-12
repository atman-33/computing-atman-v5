const description = `
### 説明

useCallbackを使って、親コンポーネントから子コンポーネントに関数を渡すサンプルコード

#### 補足
- 基本的に、親コンポーネントから子コンポーネントに関数を渡す場合はuseCallbackを使用する（不要なレンダリングを抑えるため）。
- useEffectと同じように、第2引数に依存配列を設定する。

### 利用するshadcn/uiコンポーネント

- button

### サンプルコード

#### Example.tsx

~~~typescript
'use client';

import { Button } from '@repo/ui';
import { useCallback, useState } from 'react';
import { Child } from './_components/Child';

const Example = () => {
  console.log('Parent render');
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  const clickHandler = useCallback(() => {
    setCountB(countB + 1);
  }, [countB]);

  return (
    <>
      <div className="border-4 border-blue-300 p-4">
        <div className="my-4 flex flex-col gap-4">
          <h3>Parent Component</h3>
          <div className="flex items-center gap-2">
            <Button onClick={() => setCountA((pre) => pre + 1)}>Button A</Button>
            <span>Update parent component</span>
          </div>
        </div>
        <div>
          <p>Button A Clicked: {countA} times</p>
        </div>
        <Child count={countB} onClick={clickHandler} />
      </div>
    </>
  );
};

export { Example };

~~~

#### Child.tsx

~~~typescript
import { Button } from '@repo/ui';
import { memo } from 'react';

const ChildMemo = memo(({ count, onClick }: { count: number; onClick: () => void }) => {
  console.log('%cChild render', 'color: red');
  return (
    <div>
      <div className="m-4 border-4 border-red-300 p-4">
        <h3>Child Component</h3>
        <div>
          <Button onClick={onClick} className="m-4">
            Button B
          </Button>
          <span>Update child component</span>
        </div>
        <p>Button B Clicked: {count} times</p>
      </div>
    </div>
  );
});

ChildMemo.displayName = 'Child';

export { ChildMemo as Child };

~~~

`;

export { description as UseCallbackDepsDescription };
