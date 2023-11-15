import React, { FC } from "react";
import styles from "./Item.module.css";
import { Link } from "react-router-dom";

const Item: FC<any> = ({ src, name, url, id }) => {
  // console.log(url);
  return (
    <div className={styles["item-wrapper"]} id={id}>
      {/* <Link to={url}> */}
      {/* <Link to={`/comics/${item.id}`}> */}

      <Link to={`/items/${id}`}>
        <img src={src} alt="name" />
      </Link>
      {name}
    </div>
  );
};

export default Item;
