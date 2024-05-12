'use client';

import { useContext } from 'react';
import { MyContext } from '../Example';

const GrandChild = () => {
  const [value] = useContext(MyContext);

  return (
    <div className="border border-cyan-500 p-2">
      <h3>GrandChild Component</h3>
      <div>{value}</div>
    </div>
  );
};

export { GrandChild };
