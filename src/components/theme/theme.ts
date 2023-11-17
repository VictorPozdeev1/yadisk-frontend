import { createTheme, responsiveFontSizes } from '@mui/material/styles';
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
export const appTheme:Theme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: 'Manrope, Roboto, Arial',

    h1:{
      fontWeight:'bold',
    },
    h2:{//category title
      fontWeight:'bold',
    },
    h3:{
      fontWeight:'bold',
    },
    h4:{
      fontWeight:'bold',
    },
    h5:{
      fontWeight:'bold',
    },
    h6:{//doc table header
      fontWeight:'bold',
    }
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
      main: '#035FA2',//action-blue
      light: '#EDEDED',//secondary
      contrastText: '#181818',//font-dark
    },

  },

}),{
  breakpoints:['tablet'],
});
