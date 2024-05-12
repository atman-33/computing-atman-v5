const description = `
### 説明

React Memoを使うサンプルコード

#### 補足
- React Memoを使えば、コンポーネントに渡されたpropsが変更された場合のみ再描画するようになる。

### 利用するshadcn/uiコンポーネント

- button

### サンプルコード

#### Example.tsx

~~~typescript
'use client';

import { Button } from '@repo/ui';
import { useState } from 'react';
import { Child } from './_components/Child';

const Example = () => {
  console.log('Parent render');
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <>
      <div className="border-4 border-blue-300 p-4">
        <div className="my-4 flex flex-col gap-4">
          <h3>Parent Component</h3>
          <div className="flex items-center gap-2">
            <Button onClick={() => setCountA((pre) => pre + 1)}>Button A</Button>
            <span>Update parent component</span>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => setCountB((pre) => pre + 1)}>Button B</Button>
            <span>Update child component</span>
          </div>
        </div>
        <div>
          <p>Button A Clicked: {countA} times</p>
        </div>
        <Child countB={countB} />
      </div>
    </>
  );
};

export { Example };

~~~

#### Child.tsx

~~~typescript
import { memo } from 'react';

// ---- use 2nd argument of memo case (minor case) ---- //
// function areEqual(prevProps: { countB: number }, nextProps: { countB: number }) {
//   return prevProps.countB === nextProps.countB;
// }

// const ChildMemo = memo(({ countB }: { countB: number }) => {
//   console.log('%cChild render', 'color: red');
//   return (
//     <div>
//       <div className="m-4 border-4 border-red-300 p-4">
//         <h3>Child Component</h3>
//         <p>Button B Clicked: {countB} times</p>
//       </div>
//     </div>
//   );
// }, areEqual);

// ---- Below is default case ---- //
const ChildMemo = memo(({ countB }: { countB: number }) => {
  console.log('%cChild render', 'color: red');
  return (
    <div>
      <div className="m-4 border-4 border-red-300 p-4">
        <h3>Child Component</h3>
        <p>Button B Clicked: {countB} times</p>
      </div>
    </div>
  );
});

ChildMemo.displayName = 'Child';

export { ChildMemo as Child };

~~~

`;

export { description as MemoDescription };
