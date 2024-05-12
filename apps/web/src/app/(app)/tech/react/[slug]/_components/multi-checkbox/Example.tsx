'use client';

import { Checkbox } from '@repo/ui';
import { useState } from 'react';

const Example = () => {
  const [fruits, setFruits] = useState([
    { label: 'Apple', value: 100, checked: false },
    { label: 'Orange', value: 200, checked: false },
    { label: 'Banana', value: 300, checked: false },
  ]);

  const [sum, setSum] = useState(0);

  const handleChange = (e: any) => {
    const newFruits = fruits.map((fruit) => {
      const newFruit = { ...fruit };
      if (newFruit.label === e.target.value) {
        newFruit.checked = !newFruit.checked;
      }

      return newFruit;
    });

    setFruits(newFruits);

    const sumVal = newFruits
      .filter((fruit) => fruit.checked)
      .reduce((sumVal, fruit) => sumVal + fruit.value, 0);
    setSum(sumVal);

    // NOTE: Another way for calculating the sum (though it's deprecated).
    // let sumVal = 0;
    // newFruits
    //   .filter((fruit) => fruit.checked)
    //   .forEach((fruit) => {
    //     sumVal += fruit.value;
    //   });
  };

  return (
    <div>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.label} className="my-2 flex items-center space-x-2">
            <Checkbox
              id={fruit.label}
              onClick={(e) => handleChange(e)}
              checked={fruit.checked}
              value={fruit.label}
            />
            <label htmlFor={fruit.label} className="hover:cursor-pointer">
              {fruit.label}: {fruit.value}
            </label>
          </div>
        );
      })}
      <div>Total: {sum}</div>
    </div>
  );
};

export { Example as MultiCheckboxExample };
