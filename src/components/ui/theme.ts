import { createTheme, Theme } from '@mui/material';
import { Shadows } from '@mui/material/styles/shadows';

const theme: Theme = createTheme({
  palette: {
    primary: {
      light: '#988df6',
      main: '#533ffb',
      dark: '#2a207e',
      contrastText: '#ffffff',
    },
  },
  spacing: (value: number) => `${value * 8}px`,
  shadows: Array(25).fill('none') as Shadows,
  shape: {
    borderRadius: 0,
  },
});

export default theme;
