'use client';

import { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react';

type ActionType = { type: '+' | '-'; step: number };

const reducer = (prev: number, action: ActionType) => {
  switch (action.type) {
    case '+':
      return prev + action.step;
    case '-':
      return prev - action.step;
    default:
      throw new Error('invalid action');
  }
};

const CounterContext = createContext<number>(0);
const CounterDispatchContext = createContext<Dispatch<ActionType>>(() => 0);

const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <CounterContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>{children}</CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  return useContext(CounterContext);
};

const useCounterDispatch = () => {
  return useContext(CounterDispatchContext);
};

export { CounterProvider, useCounter, useCounterDispatch };
