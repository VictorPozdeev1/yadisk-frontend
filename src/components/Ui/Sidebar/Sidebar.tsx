import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import Spinner from "../Spinner/Spinner";

const Sidebar: FC<any> = ({ categories }) => {
  console.log(categories);
  const content = categories ? (
    categories.map((item: any) => (
      //<div key={item.resource_id}>{item.name}</div>
      <div>
        <Link key={item.resource_id} to={`/${item.name}`}>
          {item.name}
        </Link>
      </div>
    ))
  ) : (
    <Spinner />
  );

  return (
    <div className={styles["wrapper"]} data-testid="sidebar_test">
      {content}
    </div>
  );
};

export default Sidebar;
