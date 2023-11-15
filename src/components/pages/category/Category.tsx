import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../../Item/Item";
import { getDocuments } from "../../../data/api/request";

import "./Category.module.css";

interface IItem {
  id: string;
  name: string;
  category: string;
}

const Category: FC = () => {
  const { category } = useParams<{ category: string | undefined }>(); // Указываем тип для category как string или undefined
  const [items, setItems] = useState<IItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (category) { // Проверяем, определено ли значение category
          const documents = await getDocuments(category);
          if (documents) { // Проверяем, определены ли документы
            const processedItems: IItem[] = documents.map((item: any) => ({
              id: item.resource_id,
              name: item.name,
              category: category,
            }));
            setItems(processedItems);
          }
        }
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Category;
