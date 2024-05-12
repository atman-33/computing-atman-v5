'use client';

import { useEffect, useState } from 'react';

const Example = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    console.log('useEffect is called');
    let intervalId = window.setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    // The return inside useEffect will be called when thecomponent is unmounted.
    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <h3>
        <time>{time}</time>
        <span> seconds elapsed</span>
      </h3>
    </>
  );
};

export { Example as UseEffectInitExample };
