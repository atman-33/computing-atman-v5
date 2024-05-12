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

export { Example as ContextFileExample };
