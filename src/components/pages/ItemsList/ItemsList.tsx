import React, { FC, useEffect, useState, Fragment } from "react";
import styles from "./ItemsList.module.css";
import { table } from "console";

const ItemsList: FC<any> = ({ items }) => {
  return (
    <table className={styles["wrapper"]}>
      <thead>
        <tr className={styles["row-header"]}>
          <th>Документ</th>
          <th>Категория</th>
        </tr>
      </thead>
      <tbody className={styles["td-wrapper"]}>{items}</tbody>
    </table>
    // <div className={styles.wrapper}>
    //   <div className={styles["row-header"]}>
    //     <span>Документ</span>
    //     <span>Категория</span>
    //   </div>
    //   {items}
    // </div>
  );
};

export default ItemsList;
