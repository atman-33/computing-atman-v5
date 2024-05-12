const description = `
### 説明

複数のstateを扱うサンプルコード

### サンプルコード

~~~typescript
'use client';

import { Button } from '@repo/ui';
import { useState } from 'react';

const Example = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(10);
  const [countC, setCountC] = useState(100);
  return (
    <>
      <div className="flex flex-col space-y-8">
        <div>
          <p>Clicked Button A {countA} times</p>
          <Button className="m-2" onClick={() => setCountA(countA + 1)}>
            Count Button A
          </Button>
        </div>
        <div>
          <p>Clicked Button B {countB} times</p>
          <Button className="m-2" onClick={() => setCountB(countB + 1)}>
            Count Button B
          </Button>
        </div>
        <div>
          <p>Clicked Button C {countC} times</p>
          <Button className="m-2" onClick={() => setCountC(countC + 1)}>
            Count Button C
          </Button>
        </div>
      </div>
    </>
  );
};
export { Example };
~~~
`;

export { description as MultipleStateDescription };
