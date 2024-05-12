const description = `
### 説明

ラジオボタンのサンプルコード

### サンプルコード

~~~typescript
'use client';

import { Label, RadioGroup, RadioGroupItem } from '@repo/ui';
import { useState } from 'react';

const Example = () => {
  const [value, setValue] = useState('');
  const RADIO_COLLECTION = ['apple', 'banana', 'cherry'];

  const changeValue = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>
        <RadioGroup
          defaultValue="comfortable"
          onClick={(e) => changeValue(e)}
          className="flex flex-col space-y-4"
        >
          {RADIO_COLLECTION.map((item) => (
            <div key={item} className="flex items-center space-x-2">
              <RadioGroupItem value={item} id={item} />
              <Label htmlFor={item}>{item}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
      <div className="text-xl">Clicked value 👉 {value}</div>
    </>
  );
};

export { Example };
~~~

`;

export { description as RadioDescription };
