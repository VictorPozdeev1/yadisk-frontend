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
const themeColors={
  fontDark:"#181818",
  actionBlue:'#035FA2',
  secondary:'#EDEDED',

}
export const appTheme:Theme = createTheme({
  typography: {
    fontFamily: 'Manrope, Roboto, Arial',

    h1:{
      fontWeight:'bold',
    },
    h2:{//category title
      fontSize:36,
      lineHeight:1.5,
      color:themeColors.fontDark,
      fontWeight:'bold',
    },
    h3:{
      color:themeColors.fontDark,
      fontWeight:'bold',
    },
    h4:{
      color:themeColors.fontDark,
      fontWeight:'bold',
    },
    h5:{
      color:themeColors.fontDark,
      fontWeight:'bold',
    },
    h6:{//doc table header
      color:themeColors.fontDark,
      fontWeight:'bold',
    },
    body1:{
      color:themeColors.fontDark,
      fontWeight:'600',
    },
  },
  breakpoints:{
    values:{
      mobile:320,
      tablet:805,
      laptop:1200,
      desktop:1523,
    }
  },

  palette: {
    primary: {
      main: themeColors.actionBlue,//action-blue
      light: themeColors.secondary,
      contrastText: themeColors.fontDark,//font-dark
    },
    secondary:{//for table buttons
      main: themeColors.fontDark,//font-dark
    }
  },

});
