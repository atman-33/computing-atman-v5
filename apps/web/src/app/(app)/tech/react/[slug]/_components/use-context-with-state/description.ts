const description = `
### 説明

useStateとuseContextを組み合わせたコンポーネントのサンプルコード

### 利用するshadcn/uiコンポーネント

- button

### サンプルコード

#### Example.tsx

~~~typescript
'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Child } from './_components/Child';
import { OtherChild } from './_components/OtherChild';

const MyContext = createContext<[number, Dispatch<SetStateAction<number>>]>([0, () => 0]);

const Example = () => {
  const [state, setState] = useState(0);

  return (
    <>
      <MyContext.Provider value={[state, setState]}>
        <div className="flex flex-col gap-8">
          <Child />
          <OtherChild />
        </div>
      </MyContext.Provider>
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

const GrandChild = () => {
  const [value] = useContext(MyContext);

  return (
    <div className="border border-cyan-500 p-2">
      <h3>GrandChild Component</h3>
      <div>{value}</div>
    </div>
  );
};

export { GrandChild };

~~~

#### OtherChild.tsx

~~~typescript
'use client';

import { Button } from '@repo/ui';
import { useContext } from 'react';
import { MyContext } from '../Example';

const OtherChild = () => {
  const [state, setState] = useContext(MyContext);

  const clickHandler = () => {
    setState((prev) => prev + 1);
  };

  return (
    <div className="border border-red-500 p-2">
      <h3>Other Child Component</h3>
      <Button onClick={clickHandler}>+</Button>
      <h3>{state}</h3>
    </div>
  );
};

export { OtherChild };

~~~

`;

export { description as UseContextWithStateDescription };
