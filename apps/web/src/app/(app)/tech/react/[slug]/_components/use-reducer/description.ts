const description = `
### 説明

useReducerコンポーネントのサンプルコード

#### 補足
- useReducer: ステートの更新方法をステート自体で管理する。
- ステートがオブジェクトである場合は、スプレッド演算子を使用してコピーして扱うこと。

### サンプルコード

~~~typescript
'use client';

import { Button } from '@repo/ui';
import { useReducer, useState } from 'react';

type ActionType = { type: '+' | '-'; step: number };

/**
 * A reducer function that takes the previous value and an action,
 * and returns the new value based on the action type.
 *
 * @param {number} prev - The previous value.
 * @param {ActionType} action - The action object.
 * @return {number} The new value after applying the action.
 */
const reducer = (prev: number, action: ActionType) => {
  // If state is object, then use spread operator to copy the object.
  // const newState = {...prev}

  switch (action.type) {
    case '+':
      return prev + action.step;
    case '-':
      return prev - action.step;
    default:
      throw new Error('invalid action');
  }
};

const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer(reducer, 0);

  // In the following case, useState cannot maintain pure functions,
  // leading to decreased maintainability and making testing difficult.
  const step = 2;
  const countUp = () => {
    setState((prev) => prev + step);
  };

  // On the other hand, useReducer can maintain pure functions,
  // which improves maintainability.
  const rcountUp = () => {
    dispatch({ type: '+', step: 2 });
  };

  const rcountDown = () => {
    dispatch({ type: '-', step: 3 });
  };

  return (
    <div className="flex flex-col gap-y-8">
      <div>
        <h3>{state}</h3>
        <Button onClick={countUp}>+</Button>
      </div>
      <div className="flex flex-col gap-2">
        <h3>{rstate}</h3>
        <div className="flex gap-2">
          <Button onClick={rcountUp}>+</Button>
          <Button onClick={rcountDown}>-</Button>
        </div>
      </div>
    </div>
  );
};

export { Example };
~~~
`;

export { description };
