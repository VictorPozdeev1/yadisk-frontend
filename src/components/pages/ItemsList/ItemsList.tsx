import React, { FC, useEffect, useState } from "react";
import styles from "./ItemsList.module.css";

const ItemsList: FC<any> = ({ items }) => {
  return <div className={styles.wrapper}>{items}</div>;
};

export default ItemsList;
