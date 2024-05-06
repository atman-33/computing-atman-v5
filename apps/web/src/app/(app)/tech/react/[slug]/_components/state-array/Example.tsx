'use client';

import { Button } from '@repo/ui';
import { useState } from 'react';

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];
  const [nums, setNums] = useState(numArray);
  console.log('numArray => ', numArray);

  const shuffle = () => {
    const newNums = [...nums];

    // NOTE: nuwNums is not equal to nums because of shallow copy
    console.log('nums === newNums => ', nums === newNums);

    const value = newNums.pop();
    if (value) {
      newNums.unshift(value);
      console.log('newNums => ', newNums);

      setNums(newNums);
    }
  };

  return (
    <>
      <div>
        <h1 className="my-4 text-3xl">{nums}</h1>
        <Button onClick={shuffle}>shuffle</Button>
      </div>
    </>
  );
};

export { Example };
