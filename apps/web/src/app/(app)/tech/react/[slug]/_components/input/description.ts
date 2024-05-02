const description = `
### 説明

Inputコンポーネントのサンプルコード

### サンプルコード

~~~typescript
'use client';

import { Input, Label } from '@repo/ui';

const Example = () => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <h3>コンソールを確認しながら、入力イベントを実施してください。</h3>
        <Label>
          Input event:
          <Input
            className="my-2"
            type="text"
            onChange={() => console.log('onChange detection')}
            onBlur={() => console.log('onBlur detection')}
            onFocus={() => console.log('onFocus detection')}
          ></Input>
        </Label>

        <Label>
          Get input data:
          <Input type="text" className="my-2" onChange={(e) => console.log(e.target.value)}></Input>
        </Label>
      </div>
    </>
  );
};
export { Example };
~~~
`;

export { description };
