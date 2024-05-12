'use client';

import { Input, Label } from '@repo/ui';

const Example = () => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <p>Please input something while checking the console.</p>
        <Label>
          Input event:
          <Input
            className="my-2"
            type="text"
            onChange={() => console.log('onChange detection')}
            onBlur={() => console.log('onBlur detection')}
            onFocus={() => console.log('onFocus detection')}
          ></Input>
        </Label>

        <Label>
          Get input data (👉 output to console):
          <Input type="text" className="my-2" onChange={(e) => console.log(e.target.value)}></Input>
        </Label>
      </div>
    </>
  );
};
export { Example as InputExample };
