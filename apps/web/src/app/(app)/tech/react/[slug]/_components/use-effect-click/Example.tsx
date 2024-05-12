'use client';

import { Button } from '@repo/ui';
import { useEffect, useLayoutEffect, useState } from 'react';

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
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem('time-key') ?? '');
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, []);

  useEffect(() => {
    console.log('init');
    let intervalId: number | undefined = undefined;

    if (isRunning) {
      intervalId = window.setInterval(() => {
        console.log('timer start');
        setTime((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      window.clearInterval(intervalId);
      console.log('end');
    };
  }, [isRunning]);

  useEffect(() => {
    // console.log('updated');
    const _time = parseInt(window.localStorage.getItem('time-key') ?? '');
    if (time === 0 && !isNaN(_time)) {
      return;
    }

    document.title = 'counter: ' + time;
    window.localStorage.setItem('time-key', time.toString());

    return () => {
      // console.log('updated end');
    };
  }, [time]);

  const toggle = () => {
    setIsRunning((prev) => !prev);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
    window.localStorage.setItem('time-key', '0');
  };

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

export { Example as UseEffectClickExample };
