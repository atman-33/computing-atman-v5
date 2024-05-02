const description = `
### 説明

useStateコンポーネントのサンプルコード

### サンプルコード

~~~typescript
'use client';

import { Input } from '@repo/ui';
import { useState } from 'react';

const Example = () => {
  const [val, setVal] = useState('');

  return (
    <>
      <div className="mt-4 flex items-center space-x-4">
        <Input type="text" onChange={(e) => setVal(e.target.value)} className="w-80" />
        <div>={val}</div>
      </div>
    </>
  );
};
export { Example };
~~~
`;

export { description };
