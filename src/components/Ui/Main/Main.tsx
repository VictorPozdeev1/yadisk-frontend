import React, { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router';
import { DocumentTable } from '../DocumentTable/DocumentTable';
import Box from '@mui/material/Box';

export interface MainProps {

}
export const Main: FC<PropsWithChildren<MainProps>> = () => {

  return (
    <Box component={'main'} sx={{
      // display: 'flex',
      // flexDirection: 'column'
    }}>
      {/* <DocumentTable  /> */}
      <Outlet />
    </Box>
  )
}
