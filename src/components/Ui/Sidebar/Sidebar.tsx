import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import YaService from "../../../data/api/YaService";

import "./Sidebar.module.css"

const Sidebar: FC = () => {
    const { getAllCategoriesName } = YaService();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getAllCategoriesName().then((categories) => {
            setCategories(categories);
        });
    }, []);

    return (
        <div>
            {categories.map((category) => (
                <Link key={category} to={`/${category}`}>
                    {category}
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;
