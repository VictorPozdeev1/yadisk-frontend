import React, { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.css";
import { appTheme } from "../../theme/theme";
import { Container, CssBaseline, Grid, useMediaQuery } from "@mui/material";
import { Theme } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
export interface LayoutProps {
  header?: JSX.Element;
  main?: JSX.Element;
  footer?: JSX.Element;
  sidebar?: JSX.Element;
  theme?: Theme;
}
const Layout: FC<LayoutProps> = ({ header, main, footer, sidebar, theme }) => {
  const breakpointTablet = appTheme?.breakpoints.up("tablet");
  //проверяет если разрешение экрана меньше брейкпоинта
  const isTablet = useMediaQuery(breakpointTablet);
  return (
    <ThemeProvider theme={(theme as Theme) ?? appTheme}>
      <CssBaseline>
        <Container
          disableGutters={isTablet}
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {header}
          <Grid
            container
            direction={"row"}
            justifyContent={"space-between"}
            wrap={"nowrap"}
            columns={2}
            sx={{
              flex: "1",
            }}
          >
            {isTablet && (
              <Grid item maxWidth={250} maxHeight={"100%"}>
                {sidebar}
              </Grid>
            )}

            <Grid item maxWidth={"100%"}>
              {main}
            </Grid>
          </Grid>
          {footer}
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default Layout;
