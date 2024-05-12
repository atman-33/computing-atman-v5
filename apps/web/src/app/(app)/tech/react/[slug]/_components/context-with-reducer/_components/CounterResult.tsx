'use client';

import { useCounter } from '../_context/CounterContext';

const CounterResult = () => {
  const state = useCounter();

  return <h3>{state}</h3>;
};

export { CounterResult };
