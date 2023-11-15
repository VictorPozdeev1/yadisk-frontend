import React, { FC, PropsWithChildren } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet } from 'react-router';
import { Container, Theme } from '@mui/system';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export interface MainProps {

}
export const Main: FC<PropsWithChildren<MainProps>> = () => {
  //проверяет если разрешение экрана меньше брейкпоинта
  const isTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down('tablet'));

  return (
    <main className={''}>
      <Grid
        container
        direction={'row'}
        justifyContent={'space-between'}
        wrap={'nowrap'}
        columns={2}
      >{!isTablet &&
        <Grid item maxWidth={250} maxHeight={"100%"} sx={{
          bgcolor: "red",
        }}>
          <Sidebar />
        </Grid>}
        <Grid item maxWidth={'100%'}>
          <Outlet />
        </Grid>
      </Grid>
    </main>
  )
}
