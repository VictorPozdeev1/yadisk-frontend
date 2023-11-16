import React, { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router';

export interface MainProps {

}
export const Main: FC<PropsWithChildren<MainProps>> = () => {

  return (
    <main className={''}>
      <Outlet />
    </main>
  )
}
