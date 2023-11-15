import React, { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { ThemeProvider } from '@mui/material/styles';
import { appTheme } from "../../theme/theme";
import { Container, CssBaseline } from "@mui/material";
import { Theme } from "pretty-format";
export interface LayoutProps {
  header?: JSX.Element;
  main?: JSX.Element;
  footer?: JSX.Element;
  sidebar?: JSX.Element;
  theme?: Theme;

}
const Layout: FC<PropsWithChildren<LayoutProps>> = ({ header, footer, sidebar, theme, children }) => {
  return (
    <ThemeProvider theme={theme as Theme ?? appTheme}>
      <CssBaseline>
        <Container disableGutters sx={{
          height: '100vh'
        }}>
          {children}

        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default Layout;
