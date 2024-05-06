'use client';

import { Button, Input } from '@repo/ui';
import { ChangeEvent, useState } from 'react';

const Example = () => {
  const personObj: { name: string; age: number } = { name: 'Tom', age: 18 };
  const [person, setPerson] = useState(personObj);

  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, name: e.target.value });
  };

  const changeAge = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, age: Number(e.target.value) });
  };

  const reset = () => {
    setPerson({ name: '', age: 0 });
  };

  return (
    <>
      <div className="flex flex-col space-y-4">
        <div>Name: {person.name}</div>
        <div>Age: {person.age}</div>
        <Input type="text" onChange={(e) => changeName(e)} value={person.name}></Input>
        <Input type="number" onChange={(e) => changeAge(e)} value={person.age}></Input>
        <div>
          <Button onClick={reset}>Reset</Button>
        </div>
      </div>
    </>
  );
};
export { Example };
