const description = `
### 説明

useContextコンポーネントのサンプルコード

#### 補足
- useContextは、コンポーネント間でデータを共有するために用いる（propsのバケツリレーを回避することができる）。
- ただし、コードが簡易になる点からもRecoilやJotaiなどの状態管理ライブラリを使用することを推奨する。

### サンプルコード

#### Example.tsx

~~~typescript
'use client';

import { createContext } from 'react';
import { Child } from './_components/Child';

const MyContext = createContext('hello');

const Example = () => {
  return (
    <>
      <Child />
    </>
  );
};

export { Example, MyContext };

~~~

#### Child.tsx

~~~typescript
import { GrandChild } from './GrandChild';

const Child = () => {
  return (
    <div className="border border-red-500 p-2">
      <h3>Child Component</h3>
      <GrandChild />
    </div>
  );
};

export { Child };

~~~

#### GrandChild.tsx

~~~typescript
'use client';

import { useContext } from 'react';
import { MyContext } from '../Example';

// If you don't use context, you can use props instead.
// const GrandChild = ({ value }: { value: string }) => {
const GrandChild = () => {
  const value = useContext(MyContext);

  return (
    <div className="border border-cyan-500 p-2">
      <h3>GrandChild Component</h3>
      <div>{value}</div>
    </div>
  );
};

export { GrandChild };

~~~

`;

export { description as UseContextDescription };
