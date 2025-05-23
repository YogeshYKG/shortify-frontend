import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import ShortifyApp from './ShortifyApp';

const theme = createTheme({
  palette: {
    mode: 'light', // toggle to 'dark' in ThemeModule
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ShortifyApp />
    </ThemeProvider>
  );
}

export default App;
