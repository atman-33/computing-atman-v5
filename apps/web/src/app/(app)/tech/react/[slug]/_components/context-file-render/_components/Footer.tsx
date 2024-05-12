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
