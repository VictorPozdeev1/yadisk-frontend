import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../../Item/Item";
import ItemsList from "../ItemsList/ItemsList";
import { DocumentTable } from "../../Ui/DocumentTable/DocumentTable";

interface IItem {
  id: string;
  name: string;
  category: string;
}

const Category: FC<any> = ({ items }) => {
  const { category } = useParams();
  const filterItems = category
    ? items.filter((el: any) => el.category === category)
    : items;
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
      <h1>{`${category ?? "Все документы"}`}</h1>
      <DocumentTable documentList={filterItems}></DocumentTable>
      {/* <ItemsList items={filterItems} category={category}></ItemsList> */}
    </>
  );
};

export default Category;
