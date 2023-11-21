import React, { FC, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import styles from "./Sidebar.module.css";
import Spinner from "../Spinner/Spinner";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { apiStoreCategories } from "../../../store";
import { toJS } from "mobx";
import { Logo } from "../Logo/Logo";
import Category from "../../../data/contracts/Category";
interface SidebarProps {

}
const Sidebar: FC<SidebarProps> = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories = toJS(apiStoreCategories.categories);

    const content = categories ? (

        categories.map((item: Category) => (
            //<div key={item.resource_id}>{item.name}</div>
            <div
                key={item.resource_id}
                style={{

                    width: "90%",
                    backgroundColor: selectedCategory === item.name ? "#ffffff" : "transparent",
                    borderRadius: selectedCategory === item.name ? "7px" : "transparent",
                }}
            >
                <NavLink
                    key={item.resource_id}
                    to={`/${item.name}`}
                    style={{
                        padding: "12px 24px 12px 24px",
                        width: "100%",
                        display: "block",
                        textDecoration: "none",
                        color: selectedCategory === item.name ? "#035FA2" : "#333",
                        cursor: "pointer",
                    }}
                    onClick={() => setSelectedCategory(item.name)}
                >
                    {item.name}
                </NavLink>
            </div>
        ))
    ) : (
        <Spinner />
    );

    return (
        <div
            data-testid="sidebar_test"
            style={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "left",
                position: "relative",
                gap: '27px',
                padding: '20px 12px 30px',
                minWidth: '250px',
            }}
        >

            <div data-testid="logo_test">
                <Logo />
            </div>
            {/* category wrapper */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
            }}>

                <div data-testid={'toggle-el'} style={{

                    width: "90%",
                    backgroundColor: selectedCategory === null ? "#ffffff" : "transparent",
                    borderRadius: selectedCategory === null ? "7px" : "transparent",
                }}>
                    <NavLink
                        key={"allDocuments"}
                        to={"/"}
                        onClick={() => setSelectedCategory(null)}
                        style={{
                            padding: "12px 24px 12px 24px",
                            width: "100%",
                            display: "block",
                            textDecoration: "none",
                            color: selectedCategory === null ? "#035FA2" : "#333",
                            cursor: "pointer",
                        }}
                        data-testid={'toggle-go-home-btn'}
                    >
                        Все документы
                    </NavLink>
                </div>
                {content}
            </div>



            {/* <Fab
                variant="extended"
                sx={{
                    marginTop: "auto",
                    backgroundColor: "#035FA2",
                    color: "white",
                    marginBottom: "2em",
                    display: "flex",
                    justifyContent: "space-between",
                    transition: "background-color 0.5s",
                    fontSize: "14px",
                    position: "fixed",
                    bottom: 0,
                    "&:hover": {
                        backgroundColor: "#024978",
                    },
                    "@media (max-width: 768px)": {
                        width: "5%",
                        left: '1em',
                    },

                }}
                size="large"
            >
                Документ
                <AddIcon />
            </Fab> */}

        </div>
    );
};


export default Sidebar;
