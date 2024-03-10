import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  palette: {
    ochre: {
      main: '#87A795',
      light: '#CEF9E1',
      dark: '#596D62',
      contrastText: '#000000',
    },
    secondary: {
        main: '#6868AC',
        light: '#A9B4DD',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#000000',
      },
  },
});
