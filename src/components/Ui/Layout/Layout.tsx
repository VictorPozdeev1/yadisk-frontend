import React, { FC } from "react";
import { CssBaseline, Container, Grid, useMediaQuery, ThemeProvider } from "@mui/material";
import { Theme } from '@mui/system';
import { appTheme } from "../../theme/theme";
import ErrorSnackbar from "../ErrorSnackbar/ErrorSnackbar";

interface LayoutProps {
  header?: JSX.Element;
  main?: JSX.Element;
  footer?: JSX.Element;
  sidebar?: JSX.Element;
  theme?: Theme;
}

const Layout: FC<LayoutProps> = ({ header, main, footer, sidebar, theme = appTheme }) => {
  const breakpointTablet = theme.breakpoints.up('tablet');
  const isTablet = useMediaQuery(breakpointTablet);

  return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container disableGutters={isTablet} sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Grid
              container
              direction={!isTablet ? 'column' : 'row'}
              justifyContent={'space-between'}
              wrap={'nowrap'}
              columns={2}
              sx={{
                flex: '1'
              }}
          >
            {!isTablet &&
                <Grid item sx={{ maxWidth: '100%', backgroundColor: "#ffffff" }}>
                  {header}
                </Grid>}

            {isTablet &&
                <Grid item sx={{ flexBasis: '25%', maxWidth: 250, maxHeight: "100%", backgroundColor: "#EDEDED" }}>
                  {sidebar}
                </Grid>}

            <Grid item sx={{ flex: '3' }}>
              {main && (
                  <Grid item sx={{ flex: '1' }}>
                    {main}
                  </Grid>
              )}
            </Grid>
          </Grid>
          {/*{footer}*/}
        </Container>
        <ErrorSnackbar></ErrorSnackbar>
      </ThemeProvider>
  );
};

export default Layout;
