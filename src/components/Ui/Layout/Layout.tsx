import React, { FC } from "react";
import { appTheme } from "../../theme/theme";
import { Container, CssBaseline, Grid, useMediaQuery } from "@mui/material";
import { Theme } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';

export interface LayoutProps {
    header?: JSX.Element;
    main?: JSX.Element;
    footer?: JSX.Element;
    sidebar?: JSX.Element;
    theme?: Theme;
}

const Layout: FC<LayoutProps> = ({ main, sidebar, theme }) => {
    const isMobile = useMediaQuery('(max-width:768px)');
    const isTablet = useMediaQuery(appTheme?.breakpoints.up('tablet'));

    return (
        <ThemeProvider theme={theme as Theme ?? appTheme}>
            <CssBaseline />
            <Container disableGutters={isTablet} sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Grid
                    container
                    direction={isMobile ? 'column' : 'row'}
                    justifyContent={'space-between'}
                    wrap={'nowrap'}
                    columns={2}
                    sx={{
                        flex: '1',
                    }}
                >
                    {isMobile &&
                        <Grid item sx={{  maxWidth: '100%', backgroundColor: "#ffffff" }}>
                            {sidebar}
                        </Grid>}

                    {isTablet && !isMobile &&
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
            </Container>
        </ThemeProvider>
    );
};

export default Layout;