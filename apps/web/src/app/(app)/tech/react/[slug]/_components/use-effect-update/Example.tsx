'use client';

import { Button } from '@repo/ui';
import { useEffect, useState } from 'react';

const Example = () => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  return (
    <div className="flex flex-col place-items-start gap-4">
      {isDisplayed && <Timer />}
      <Button onClick={() => setIsDisplayed((prev) => !prev)}>Toggle</Button>
    </div>
  );
};

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log('init');
    let intervalId: number | undefined = undefined;
    intervalId = window.setInterval(() => {
      console.log('interval called');
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
      console.log('end');
    };
  }, []);

  useEffect(() => {
    console.log('updated');
    document.title = 'counter: ' + time;
    window.localStorage.setItem('time-key', time.toString());

    return () => {
      console.log('updated end');
    };
  }, [time]);

  return (
    <>
      <h3>
        <time>{time}</time>
        <span> seconds elapsed</span>
      </h3>
    </>
  );
};

export { Example as UseEffectUpdateExample };
