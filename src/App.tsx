import type { Component } from 'solid-js';
import Demo from './Demo';
import { createTheme } from './styles/createTheme';
import { ThemeProvider } from './styles/Theme';

const theme = createTheme({
 
});

const App: Component = () => {
  return (
    <ThemeProvider theme={theme}>
      <Demo />
    </ThemeProvider>
  );
};

export default App;
