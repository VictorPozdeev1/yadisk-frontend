import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";

const ItemFull: FC<any> = ({ onGetFullImg }) => {
  const { id } = useParams();
  console.log(id);
  const url = onGetFullImg(id);
  return <div>{<img src={url} alt="12" />}</div>;
};

export default ItemFull;
