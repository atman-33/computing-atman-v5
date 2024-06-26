const description = `
### 説明

ボタンクリック時に処理を実行するサンプルコード

### 利用するshadcn/uiコンポーネント

- button

### サンプルコード

~~~typescript
'use client';

import { Button } from '@repo/ui';

const Example = () => {
  const clickHandler = () => {
    alert('Clicked');
  };

  const clickHandler2 = () => {
    console.log('Clicked');
  };

  const hello = () => {
    return 'hello react';
  };

  console.log('hello react');

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <div>{hello()}</div>
      </div>

      <div>
        <h3>1. Display alert</h3>
        <Button onClick={clickHandler}>Click me</Button>
      </div>

      <div>
        <h3>2. Output to console</h3>
        <Button onClick={clickHandler2}>Click me</Button>
      </div>
    </div>
  );
};

export { Example };
~~~
`;

export { description as ClickHandlerDescription };
