import React, { FC } from "react";
import styles from "./Item.module.css";
import { NavLink } from "react-router-dom";

const Item: FC<any> = ({ src, name, url, id, category, onDelete, path }) => {
  // console.log(url);
  return (
    <tr className={styles["wrapper"]} key={id}>
      <td>
        <span className={styles["icon"]}>icon</span>
        <NavLink to={`/${category}/${id}`} className={styles["NavLink"]}>
          {name}
        </NavLink>
      </td>
      <td>
        {category}
        <button
          className={styles["button"]}
          onClick={() => {
            console.log(`delete ${path}`);
            onDelete(path);
          }}
        >
          delete
        </button>
      </td>
    </tr>
    // <div
    //   // className={styles["item-wrapper"]}
    //   id={id}
    // >
    //   <Link to={`/${category}/${id}`}>
    //     <div className={styles["wrapper"]}>
    //       <span>
    //         {name}
    //       </span>
    //       <span>{category}</span>
    //       <button>delete</button>
    //     </div>
    //   </Link>
    // </div>
  );
};

export default Item;
