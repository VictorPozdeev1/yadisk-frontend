import React, { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router';
import { DocumentTable } from '../DocumentTable/DocumentTable';
import Box from '@mui/material/Box';
import { Grid, Typography, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/system';

export interface MainProps {
  title?: string;
}
export const Main: FC<PropsWithChildren<MainProps>> = ({ title }) => {
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up('tablet'));

  return (
    <Grid
      container
      component={'main'}
      direction={'column'}
      gap={'35px'}
      p={isDesktop ? '25px 20px' : '0'}
    >
      <Grid item>
        <Typography variant='h2' component='h2'>
          {title ? title : "Все категории"}
        </Typography>
      </Grid>
      <Grid item>
        <Outlet />
      </Grid>
    </Grid>
  )
}
