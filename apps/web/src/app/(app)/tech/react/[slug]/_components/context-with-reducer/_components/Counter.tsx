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
