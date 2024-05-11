'use client';

import { Button, Input } from '@repo/ui';
import { Ref, forwardRef, useImperativeHandle, useRef } from 'react';

interface Handler {
  setFocus(): void;
}

const InputForwardRef = forwardRef<Handler>((props, ref) => {
  const inputRef = useRef({} as HTMLInputElement);

  useImperativeHandle(ref, () => ({
    setFocus() {
      inputRef.current.focus();
    },
  }));

  return <Input type="text" ref={inputRef as Ref<HTMLInputElement>} />;
});
InputForwardRef.displayName = 'InputForwardRef';

const Example = () => {
  const ref = useRef({} as Handler);
  return (
    <div className="flex flex-col place-items-start space-y-4">
      <InputForwardRef ref={ref} />
      <Button onClick={() => ref.current.setFocus()}>Focus Input</Button>
    </div>
  );
};

export { Example };
