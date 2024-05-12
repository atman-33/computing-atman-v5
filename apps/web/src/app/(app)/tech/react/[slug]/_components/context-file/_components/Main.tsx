'use client';

import { useTheme } from '../_context/ThemeContext';

const Main = () => {
  const [theme] = useTheme();

  return (
    <div className={`bg-${theme}-500 p-4`}>
      <h1 className="p-4">Change Theme</h1>
    </div>
  );
};

export { Main };
