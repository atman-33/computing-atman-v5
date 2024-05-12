'use client';

import { Input } from '@repo/ui';
import { ChangeEvent, useDeferredValue, useState } from 'react';

const generateDummyItem = (num: number) => {
  return new Array(num).fill(null).map((item, index) => {
    return `item ${index}`;
  });
};

const dummyItems = generateDummyItem(1000);

const Example = () => {
  // startTransition: down priority of functions
  // isPending: true when startTransition is proccesing
  // const [isPending, startTransition] = useTransition();
  const [filterVal, setFilterVal] = useState('');

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // functions of useTransition down priority
    // startTransition(() => {
    //   setFilterVal(e.target.value);
    // });
    setFilterVal(e.target.value);
  };

  const filterdItems = dummyItems
    .filter((item) => {
      if (filterVal === '') return true;
      return item.includes(filterVal);
    })
    .map((item) => <li key={item}>{item}</li>);

  const deferredItems = useDeferredValue(filterdItems);

  return (
    <>
      <div>
        <Input type="text" onChange={changeHandler} />
        {/* {isPending && <div>Loading...</div>} */}
        <ul className="m-4 h-96 overflow-y-auto">{deferredItems}</ul>
      </div>
    </>
  );
};

export { Example as UseDeferredValueExample };
