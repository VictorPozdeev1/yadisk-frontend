import React, { FC } from "react";
import styles from "./Sidebar.module.css";

const Sidebar: FC = () => {
  return <div className={styles["wrapper"]} data-testid="sidebar_test">Sidebar</div>;
};

export default Sidebar;
