import React, { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router';
import { DocumentTable } from '../DocumentTable/DocumentTable';
import Box from '@mui/material/Box';
import { display } from '@mui/system';

export interface MainProps {

}
export const Main: FC<PropsWithChildren<MainProps>> = () => {

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <DocumentTable />
      <Outlet />
    </main>
  )
}
