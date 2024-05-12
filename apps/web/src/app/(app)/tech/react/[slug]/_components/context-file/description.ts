const description = `
### 説明

コンテキストファイルのサンプルコード

#### 補足
- CSSを動的に変更しても反映されない場合は、CSSを設定したダミーのコンポーネントを非表示で作成しておく。

### 利用するshadcn/uiコンポーネント

- radio
- rabel

### サンプルコード

#### Example.tsx

~~~typescript
import { Header } from './_components/Header';
import { Main } from './_components/Main';
import { ThemeProvider } from './_context/ThemeContext';

const Example = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
};

export { Example };

~~~

#### ThemeContext.tsx

~~~typescript
'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

const ThemeContext = createContext<[string, Dispatch<SetStateAction<string>>]>(['', () => 0]);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('gray');

  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
};

const useTheme = () => useContext(ThemeContext);

export { ThemeContext, ThemeProvider, useTheme };

~~~

#### Header.tsx

~~~typescript
'use client';

import { Label, RadioGroup, RadioGroupItem } from '@repo/ui';
import { useTheme } from '../_context/ThemeContext';

const Header = () => {
  const [theme, setTheme] = useTheme();

  const THEMES = ['yellow', 'gray', 'red'];

  const changeTheme = (e: any) => {
    if (e.target.value === theme || e.target.value === undefined) return;
    setTheme(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      {/* display: 'none' div is hidden because it's dummy to load style */}
      <div style={{ display: 'none' }}>
        <div className=" bg-yellow-500 "></div>
        <div className=" bg-gray-500 "></div>
        <div className=" bg-red-500"></div>
      </div>
      <div className={\`bg-\${theme}-500 p-4\`}>
        <RadioGroup defaultValue={theme} className="flex gap-8" onClick={(e) => changeTheme(e)}>
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

export {Header};

~~~

#### Main.tsx

~~~typescript
'use client';

import { useTheme } from '../_context/ThemeContext';

const Main = () => {
  const [theme] = useTheme();

  return (
    <div className={\`bg-\${theme}-500 p-4\`}>
      <h1 className="p-4">Change Theme</h1>
    </div>
  );
};

export {Main};

~~~

`;

export { description as ContextFileDescription };
