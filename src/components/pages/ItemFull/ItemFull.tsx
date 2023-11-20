import React, { FC, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import YandexDiskAPI from "../../../data/api/request";
import Spinner from "../../Ui/Spinner/Spinner";

const { getDocuments } = YandexDiskAPI;

const ItemFull: FC = () => {
  const [itemFullImageUrl, setItemFullImageUrl] = useState<string>("");
  const { id } = useParams();

  useEffect(() => {
    getDocuments().then((data) => {
      if (data) {
        setItemFullImageUrl(
          data.filter((el) => el.resource_id === id)[0].sizes[0].url
        );
      }
    });
  }, []);

  const content = itemFullImageUrl ? (
    <div>{<img src={itemFullImageUrl} alt="12" />}</div>
  ) : (
    <Spinner />
  );

  return content;
};

export default ItemFull;
