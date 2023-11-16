import { createTheme } from '@mui/material/styles';
import { Theme } from '@mui/system';

// переопределяем инерфейс брейкпоинтов
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export const appTheme:Theme = createTheme({
  typography: {
    fontFamily: ' Manrope, Roboto, Arial',
  },
  breakpoints:{
    values:{
      mobile:320,
      tablet:768,
      laptop:1200,
      desktop:1523,
    }
  },

  palette: {
    primary: {
      main: '#035FA2',
      light: '#EDEDED',
      dark: '',
      contrastText: '#181818',
    },
    secondary: {
      main: '#EDEDED',
      contrastText: '#414042',
    }
  }

});
