const description = `
### 説明

テキストエリアのサンプルコード

### サンプルコード

~~~typescript
'use client';

import { Button, Input, Label, Textarea } from '@repo/ui';
import { useState } from 'react';

const Example = () => {
  const [val, setVal] = useState('');
  const clearVal = () => setVal('');

  return (
    <>
      <div className="flex flex-col space-y-8">
        <Label htmlFor="456" className="text-xl">
          👉 Click here to focus textarea
        </Label>
        <div className="flex flex-col space-y-4">
          <Label>Input (Line breaks NG): </Label>
          <Input
            id="123"
            placeholder="Hello"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <Label>Textarea (Line breaks OK): </Label>
          <Textarea
            id="456"
            placeholder="Hello"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
        <p>{val}</p>

        <Button onClick={clearVal}>Clear</Button>
      </div>
    </>
  );
};

export { Example };
~~~
`;

export { description as InputTextareaDescription };
