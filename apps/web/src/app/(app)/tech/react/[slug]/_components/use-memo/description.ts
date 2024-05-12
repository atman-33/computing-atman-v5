const description = `
### 説明

useMemo を使うサンプルコード

#### 補足

- memo: 計算コストの高い値のキャッシュを作成するために使用。依存する変数が変更されたときに再レンダリング
- useMemo: 関数コンポーネントの再レンダリングを最適化するために使用。プロパティ（props）が変更されたときに再レンダリング
- useMemo はメモリを消費するので、慎重に使用すること（重い計算に使用する方が良い）。

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
    console.log('countB', countB);
    setCountB(countB + 1);
  }, [countB]);

  return (
    <>
      <div className="border-4 border-blue-300 p-4">
        <div className="my-4 flex flex-col gap-4">
          <h3>Parent Component</h3>
          <div className="flex items-center gap-2">
            <Button onClick={() => setCountA((pre) => pre + 1)} className="m-4">
              Button A
            </Button>
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
'use client';

import { Button } from '@repo/ui';
import { useMemo } from 'react';

const ChildMemo = ({ count, onClick }: { count: number; onClick: () => void }) => {
  console.log('%cChild render', 'color: red');

  return useMemo(
    () => {
      console.log('%cuseMemo', 'color: green');
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
    },
    // add state value and functions to the dependency array
    [count, onClick],
  );
};

ChildMemo.displayName = 'Child';

export { ChildMemo as Child };

~~~

`;

export { description };
