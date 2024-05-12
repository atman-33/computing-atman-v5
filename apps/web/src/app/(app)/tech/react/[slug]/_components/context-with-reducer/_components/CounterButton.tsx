'use client';

import { Button } from '@repo/ui';
import { useCounterDispatch } from '../_context/CounterContext';

const CounterButton = ({ calcType, step }: { calcType: '+' | '-'; step: number }) => {
  const dispatch = useCounterDispatch();

  const clickHandler = () => {
    dispatch({ type: calcType, step });
  };

  return (
    <Button onClick={clickHandler}>
      {calcType}
      {step}
    </Button>
  );
};

export { CounterButton };
