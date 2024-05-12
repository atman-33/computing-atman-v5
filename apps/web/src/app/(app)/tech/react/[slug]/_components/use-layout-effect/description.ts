const description = `
### 説明

useLayoutEffectを利用したサンプルコード

#### 補足
- useLayoutEffectは、useEffectの前に実行される。
- useLayoutEffectは、スクリーン更新前に実行されるため、画面のちらつきを防止することができる。
- stateは、画面読み込み時に初期化されるため、値を残しておく場合は localStorage を利用する。
- このサンプルでは、タイマーをlocalStarageに保存しているが、画面をリロードすると、タイマーがリセットされる。

### 利用するshadcn/uiコンポーネント

- button

### サンプルコード

#### Example.tsx

~~~typescript
'use client';

import { Button } from '@repo/ui';
import { useEffect, useLayoutEffect, useState } from 'react';
import { Random } from './_components/Random';

const Example = () => {
  const [isDisplayed, setIsDisplayed] = useState(true);

  return (
    <div className="flex flex-col place-items-start gap-4">
      {isDisplayed && <Timer />}
      <Random />
      <Button onClick={() => setIsDisplayed((prev) => !prev)}>Toggle</Button>
    </div>
  );
};

const Timer = () => {
  const [time, setTime] = useState(0);

  useLayoutEffect(() => {
    console.log('1:useLayoutEffect start');
    const _time = parseInt(window.localStorage.getItem('time-key') ?? '');
    if (!isNaN(_time)) {
      console.log('1:useLayoutEffect setTime: ', _time);
      setTime(_time);
    }
  }, []);

  useEffect(() => {
    console.log('2:useEffect init start');
    let intervalId = window.setInterval(() => {
      console.log('2:useEffect interval called');
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
      console.log('2:useEffect init end');
    };
  }, []);

  useEffect(() => {
    // After layoutEffect executed, time is 0 in the first render
    console.log('3:useEffect updated start: ', time);
    document.title = 'counter: ' + time;
    window.localStorage.setItem('time-key', time.toString());

    return () => {
      console.log('3:useEffect updated end');
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

export { Example };

~~~

#### Random.tsx

~~~typescript
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

~~~

`;

export { description };
