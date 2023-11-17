import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../../Item/Item";
import ItemsList from "../ItemsList/ItemsList";

import "./Category.module.css";

interface IItem {
  id: string;
  name: string;
  category: string;
}

const Category: FC<any> = ({ items }) => {
  const { category } = useParams();
  const filterItems = items.filter((el: any) => el.props.category === category);
  //const [items, setItems] = useState<IItem[]>([]);

  // useEffect(() => {
  //     getAllItems(category).then((items) => {
  //         let item_url: IItem[] = [] //url item - массив собранных объектов каждой картинки
  //         items.forEach((item: never) => {
  //             const item_object: IItem = {
  //                 id: item["resource_id"],
  //                 name: item["name"],
  //                 category: item["category"]
  //             }
  //             item_url = [...item_url, item_object]
  //         })
  //         setItems(item_url);
  //     })
  // }, [category]);

  return (
    // <div>
    //     {items.map((item: any) => (
    //         <Item key={item.id} {...item} />
    //     ))}
    // </div>
    <>
      <h1>{`Это категория ${category}`}</h1>
      <ItemsList items={filterItems} category={category}></ItemsList>
    </>
  );
};

export default Category;
