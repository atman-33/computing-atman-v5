const description = `
### 説明

コンテキストファイルのサンプルコード。Contextファイルの中で、valueとsetValueを分けてExportしている。  
今回のサンプルでは、色のテーマを変更した場合でも、Footerコンポーネントは再レンダリングされない。

#### 補足

- レンダリングが重いコンポーネントは、不要なレンダリングを避けるために、Contextのvalue / setValueの必要な方をimportして利用する方がよい。
- Redux、Recoil、Jotaiなどを利用する場合は、Contextは不要となる。

### 利用するshadcn/uiコンポーネント

- radio
- label

### サンプルコード

#### Example.tsx

~~~typescript
import { Footer } from './_components/Footer';
import { Header } from './_components/Header';
import { Main } from './_components/Main';
import { ThemeProvider } from './_context/ThemeContext';

const Example = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export { Example };

~~~

#### ThemeContext.tsx
'use client';

~~~typescript
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

const ThemeContext = createContext<string>('');

const ThemeUpdateContext = createContext<Dispatch<SetStateAction<string>>>(() => '');

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('gray');

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeUpdateContext.Provider value={setTheme}>{children}</ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);
const useUpdateTheme = () => useContext(ThemeUpdateContext);

export { ThemeContext, ThemeProvider, useTheme, useUpdateTheme };

~~~

#### Header.tsx

~~~typescript
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
      <div className={\`bg-\${theme}-500 p-4\`}>
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

~~~

#### Main.tsx

~~~typescript
'use client';

import { useTheme } from '../_context/ThemeContext';

const Main = () => {
  const theme = useTheme();

  console.log('main');
  return (
    <div className={\`bg-\${theme}-500 p-4\`}>
      <h1 className="p-4">Change Theme</h1>
    </div>
  );
};

export { Main };

~~~

#### Footer.tsx

~~~typescript
'use client';

import { useUpdateTheme } from '../_context/ThemeContext';

const Footer = () => {
  // eslint-disable-next-line no-unused-vars
  const setTheme = useUpdateTheme();

  console.log('footer');
  return (
    <div>
      <h1 className="p-4">Footer</h1>
    </div>
  );
};

export { Footer };

~~~

`;

export { description as ContextFileRenderDescription };
