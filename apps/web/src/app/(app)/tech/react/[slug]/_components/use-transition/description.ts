const description = `
### 説明

useTransitionを使うサンプルコード

#### 補足
- useTransition は、パフォーマンスを向上させるために処理優先度を制御する。
- startTransition: 関数の優先度を下げる。
- isPending: startTransition が処理中の場合は true

パフォーマンスの向上のために、可能な限り useTransition の代わりに useMemo と useCallback を使用することが推奨される。  
useMemo と useCallback では望ましい改善が得られない場合にのみ、useTransition を検討した方がよい。

### 利用するshadcn/uiコンポーネント

- input

### サンプルコード

#### Example.tsx

~~~typescript
'use client';

import { Input } from '@repo/ui';
import { ChangeEvent, useState, useTransition } from 'react';

const generateDummyItem = (num: number) => {
  return new Array(num).fill(null).map((item, index) => {
    return \`item \${index}\`;
  });
};

const dummyItems = generateDummyItem(1000);

const Example = () => {
  // startTransition: down priority of functions
  // isPending: true when startTransition is proccesing
  const [isPending, startTransition] = useTransition();
  const [filterVal, setFilterVal] = useState('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // functions of useTransition down priority
    startTransition(() => {
      setFilterVal(e.target.value);
    });
  };

  return (
    <>
      <div>
        <Input type="text" onChange={changeHandler} />
        {isPending && <div>Loading...</div>}
        <ul className="m-4 h-96 overflow-y-auto">
          {dummyItems
            .filter((item) => {
              if (filterVal === '') return true;
              return item.includes(filterVal);
            })
            .map((item) => (
              <li key={item}>{item}</li>
            ))}
        </ul>
      </div>
    </>
  );
};

export { Example };

~~~

`;

export { description as UseTransitionDescription };
