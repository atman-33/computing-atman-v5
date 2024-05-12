'use client';

import { Button } from '@repo/ui';
import { useState } from 'react';
import useTimer from './_hooks/useTimer';

const Example = () => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  return (
    <div className="flex flex-col place-items-start gap-4">
      {isDisplayed && <Timer />}
      <Button className="my-2" onClick={() => setIsDisplayed((prev) => !prev)}>
        {isDisplayed ? 'Not Displayed' : 'Displayed'}
      </Button>
    </div>
  );
};

const Timer = () => {
  const { time, isRunning, toggle, reset } = useTimer();

  return (
    <>
      <h3>
        <time>{time}</time>
        <span> seconds elapsed</span>
      </h3>
      <div className="flex gap-2">
        <Button onClick={toggle}>{isRunning ? 'Pause' : 'Start'}</Button>
        <Button onClick={reset}>Reset</Button>
      </div>
    </>
  );
};

export { Example as CustomHookExample };
