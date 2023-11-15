import React, { FC } from "react";
import styles from "./Sidebar.module.css";

const Sidebar: FC<any> = ({ categories }) => {
  const content = categories
    ? categories.map((item: any) => (
        <div key={item.resource_id}>{item.name}</div>
      ))
    : null;

  return <div className={styles["wrapper"]}>{content}</div>;
};

export default Sidebar;
