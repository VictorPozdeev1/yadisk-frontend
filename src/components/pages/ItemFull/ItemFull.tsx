import React, { FC } from "react";
import { useParams } from "react-router-dom";

import "./ItemFull.module.css"

const ItemFull: FC<any> = ({ onGetFullImg }) => {
  const { id, category } = useParams();
  const url = onGetFullImg(id);
  return <div>{<img src={url} alt="image" />}</div>;
};

export default ItemFull;
