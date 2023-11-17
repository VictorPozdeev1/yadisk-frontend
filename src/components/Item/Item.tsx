import React, { FC } from "react";
import styles from "./Item.module.css";
import { Link } from "react-router-dom";

const Item: FC<any> = ({ src, name, url, id, category }) => {
  return (
    <div className={styles["item-wrapper"]} id={id}>
      <Link to={`/${category}/${id}`}>
        <img src={src} alt={name} />
      </Link>
      {name}
      <br />
      {category}
    </div>
  );
};

export default Item;
