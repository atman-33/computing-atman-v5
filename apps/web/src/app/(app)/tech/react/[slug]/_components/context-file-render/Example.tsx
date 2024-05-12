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

export { Example as ContextFileRenderExample };
