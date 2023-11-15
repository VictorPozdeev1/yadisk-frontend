import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const Layout: FC<any> = ({ header, footer, sidebar }) => {
  return (
    <>
      {header}
      <main className={styles["wrapper"]}>
        {sidebar}
        <Outlet />
      </main>
      {footer}
    </>
  );
};

export default Layout;
