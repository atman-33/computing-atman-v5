import { useEffect, useLayoutEffect, useState } from 'react';

const useTimer = () => {
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

  return {
    time,
    isRunning,
    toggle,
    reset,
  };
};

export default useTimer;
