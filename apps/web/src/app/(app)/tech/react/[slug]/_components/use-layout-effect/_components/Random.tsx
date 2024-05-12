'use client';

import { Button } from '@repo/ui';
import { useLayoutEffect, useState } from 'react';

const Random = () => {
  const [state, setState] = useState(0);

  useLayoutEffect(() => {
    if (state === 0) {
      setState(Math.random() * 300);
    }
  }, [state]);

  return <Button onClick={() => setState(0)}>state: {state}</Button>;
};

export { Random };
