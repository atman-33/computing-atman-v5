'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { Child } from './_components/Child';
import { OtherChild } from './_components/OtherChild';

const MyContext = createContext<[number, Dispatch<SetStateAction<number>>]>([0, () => 0]);

const Example = () => {
  const [state, setState] = useState(0);

  return (
    <>
      <MyContext.Provider value={[state, setState]}>
        <div className="flex flex-col gap-8">
          <Child />
          <OtherChild />
        </div>
      </MyContext.Provider>
    </>
  );
};

export { Example, MyContext };
