const description = `
### 説明

リストをフィルターして表示するサンプルコード

### サンプルコード

~~~typescript
'use client';

import { Input, Label } from '@repo/ui';
import { useState } from 'react';

const animals = ['cat', 'dog', 'bird', null, 'rat'];

const Example = () => {
  const [filterVal, setFilterVal] = useState('');

  return (
    <>
      <div className="flex flex-col space-y-4">
        <h3>Filter array</h3>
        <div className="flex items-center space-x-2">
          <Label>Filter: </Label>
          <Input type="text" onChange={(e) => setFilterVal(e.target.value)} value={filterVal} />
        </div>
        <ul className="rounded-sm border p-4">
          {animals
            .filter((animal) => (animal ?? '').includes(filterVal))
            .map((animal) => {
              return (
                <li key={animal}>
                  {animal ?? '(null or undefined)'}
                  {animal === 'cat' && ' 🐱'}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export { Example };
~~~

`;

export { description };
