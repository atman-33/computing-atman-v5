'use client';

import { createContext } from 'react';
import { Child } from './_components/Child';

const MyContext = createContext('hello');

const Example = () => {
  return (
    <>
      <Child />
    </>
  );
};

export { MyContext, Example as UseContextExample };
