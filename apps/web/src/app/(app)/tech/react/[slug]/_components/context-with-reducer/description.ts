const description = `
### 説明

Context と useReducer を合わせて利用するコンポーネントのサンプルコード

#### 補足
- Context と useReducer を合わせて利用する方が実用的

### 利用するshadcn/uiコンポーネント

- button

### サンプルコード

#### Example.tsx

~~~typescript
import { Counter } from './_components/Counter';
import { CounterProvider } from './_context/CounterContext';

const Example = () => {
  return (
    <>
      <div>
        <CounterProvider>
          <Counter />
        </CounterProvider>
      </div>
      <div className="mt-8">
        <h4>Note</h4>
        <li>Summaraize useContext and useReducer is better than useContext only. </li>
      </div>
    </>
  );
};

export { Example };

~~~

#### Counter.tsx

~~~typescript
import { CounterButton } from './CounterButton';
import { CounterResult } from './CounterResult';

const Counter = () => {
  return (
    <div className="flex flex-col gap-4">
      <CounterResult />
      <div className="flex gap-4">
        <CounterButton calcType={'+'} step={2} />
        <CounterButton calcType={'-'} step={2} />
        <CounterButton calcType={'+'} step={10} />
        <CounterButton calcType={'-'} step={10} />
      </div>
    </div>
  );
};

export { Counter };

~~~

#### CounterResult.tsx

~~~typescript
'use client';

import { useCounter } from '../_context/CounterContext';

const CounterResult = () => {
  const state = useCounter();

  return <h3>{state}</h3>;
};

export { CounterResult };

~~~

#### CounterButton.tsx

~~~typescript
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

~~~

`;

export { description as ContextWithReducerDescription };
