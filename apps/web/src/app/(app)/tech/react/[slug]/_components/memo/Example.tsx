'use client';

import { Button } from '@repo/ui';
import { useState } from 'react';
import { Child } from './_components/Child';

const Example = () => {
  console.log('Parent render');
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <>
      <div className="border-4 border-blue-300 p-4">
        <div className="my-4 flex flex-col gap-4">
          <h3>Parent Component</h3>
          <div className="flex items-center gap-2">
            <Button onClick={() => setCountA((pre) => pre + 1)}>Button A</Button>
            <span>Update parent component</span>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={() => setCountB((pre) => pre + 1)}>Button B</Button>
            <span>Update child component</span>
          </div>
        </div>
        <div>
          <p>Button A Clicked: {countA} times</p>
        </div>
        <Child countB={countB} />
      </div>
    </>
  );
};

export { Example };
