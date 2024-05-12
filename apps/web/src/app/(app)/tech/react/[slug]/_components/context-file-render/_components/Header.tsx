'use client';

import { Label, RadioGroup, RadioGroupItem } from '@repo/ui';
import { useTheme, useUpdateTheme } from '../_context/ThemeContext';

const Header = () => {
  const theme = useTheme();
  const setTheme = useUpdateTheme();

  const THEMES = ['yellow', 'gray', 'red'];

  const changeTheme = (e: any) => {
    if (e.target.value === theme || e.target.value === undefined) return;
    setTheme(e.target.value);
    console.log(e.target.value);
  };

  console.log('header');
  return (
    <>
      {/* display: 'none' div is hidden because it's dummy to load style */}
      <div style={{ display: 'none' }}>
        <div className=" bg-yellow-500 "></div>
        <div className=" bg-gray-500 "></div>
        <div className=" bg-red-500"></div>
      </div>
      <div className={`bg-${theme}-500 p-4`}>
        <RadioGroup
          defaultValue={theme}
          className="my-2 flex gap-8"
          onClick={(e) => changeTheme(e)}
        >
          {THEMES.map((item, index) => (
            <div key={item} className="flex items-center gap-2">
              <RadioGroupItem value={item} id={index as unknown as string} />
              <Label htmlFor={index as unknown as string}>{item}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </>
  );
};

export { Header };
