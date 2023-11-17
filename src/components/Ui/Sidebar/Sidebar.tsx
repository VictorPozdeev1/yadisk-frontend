import React, { FC, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import Spinner from "../Spinner/Spinner";
import Category from "../../pages/Category/Category";

const Sidebar: FC<any> = ({ categories }) => {
  console.log(categories);
  const content = categories ? (
    categories.map((item: any) => (
      //<div key={item.resource_id}>{item.name}</div>
      <div>
        <NavLink
          key={item.resource_id}
          to={`/${item.name}`}
          className={({ isActive }) => (isActive ? styles["active"] : null)}
        >
          {item.name}
        </NavLink>
      </div>
    ))
  ) : (
    <Spinner />
  );

  return (
    <div className={styles["wrapper"]} data-testid="sidebar_test">
      <NavLink
        key={"allDocuments"}
        to={"/"}
        className={({ isActive }) => (isActive ? styles["active"] : null)}
      >
        Все документы
      </NavLink>
      {content}
    </div>
  );
};

export default Sidebar;
