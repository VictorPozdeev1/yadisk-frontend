import React, { FC, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ItemFull.module.css"
import { getDocuments } from "../../../data/api/request";
import Spinner from "../../Ui/Spinner/Spinner";

const ItemFull: FC<any> = ({ onGetFullImg }) => {
  const { id, category } = useParams();
  const url = onGetFullImg(id);
  const content = url ? (
    <div>{<img src={url} alt="12" />}</div>
  ) : (
    <Spinner />
  );

  return content;
};

export default ItemFull