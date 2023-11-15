import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../../Item/Item";
import YaService from "../../../data/api/YaService";

import "./Category.module.css"

interface IItem {
    id: string;
    name: string;
    category: string;
}

const Category: FC = () => {
    const { category } = useParams();
    const { getAllItems } = YaService();
    const [items, setItems] = useState<IItem[]>([]);

    useEffect(() => {
        getAllItems(category).then((items) => {
            let item_url: IItem[] = [] //url item - массив собранных объектов каждой картинки
            items.forEach((item: never) => {
                const item_object: IItem = {
                    id: item["resource_id"],
                    name: item["name"],
                    category: item["category"]
                }
                item_url = [...item_url, item_object]
            })
            setItems(item_url);
        })
    }, [category]);

    return (
        <div>
            {items.map((item: any) => (
                <Item key = {item.id} {...item} />
            ))}
        </div>
    );
};

export default Category;