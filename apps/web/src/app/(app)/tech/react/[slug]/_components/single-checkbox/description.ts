const description = `
### 説明

チェックボックスのサンプルコード

### サンプルコード

~~~typescript
'use client';

import { Checkbox } from '@repo/ui';
import { useState } from 'react';

const Example = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckd = () => {
    setIsChecked((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" onClick={toggleCheckd} checked={isChecked} />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
      <div>{isChecked ? 'ON!' : 'OFF!'}</div>
    </>
  );
};

export { Example };
~~~

`;

export { description as SingleCheckboxDescription };
