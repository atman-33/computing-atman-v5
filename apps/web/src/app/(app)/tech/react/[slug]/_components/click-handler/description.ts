const description = `
### 説明

ボタンクリック時に処理を実行するサンプルコード

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
    <>
      <div className="m-8">
        <h3>1. アラート表示</h3>
        <Button onClick={clickHandler}>Click me</Button>
      </div>

      <div className="m-8">
        <h3>2. コンソール出力</h3>
        <Button onClick={clickHandler2}>Click me</Button>
      </div>

      <div className="m-8">
        <h3>3. 関数呼び出し</h3>
        <div>{hello()}</div>
      </div>
    </>
  );
};

export { Example };
~~~
`;

export { description };
