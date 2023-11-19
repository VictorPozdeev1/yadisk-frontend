import React, { FC } from "react";
import { Link, useParams } from "react-router-dom";

import { apiStoreDocuments } from "../../../store";
import { toJS } from "mobx";

import Spinner from "../../Ui/Spinner/Spinner";

const ItemFull: FC = () => {
  const { id } = useParams();
  const fullImageUrl = toJS(apiStoreDocuments.documents)
    .find(d => d.resource_id === id)
    ?.sizes?.[0]
    ?.url;

  return fullImageUrl ? (
    <div>{<img src={fullImageUrl} alt="12" />}</div>
  ) : (
    <Spinner />
  );
};

export default ItemFull;