import React, { useState } from "react";
import { Drawer, Fab, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {Link, NavLink} from "react-router-dom";
import Spinner from "../../Spinner/Spinner";

interface MobileMenuProps {
    categories: any[];
    open: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ categories, open, onClose }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);



    console.log(categories);
    const content = categories ? (

        categories.map((item: any) => (
            //<div key={item.resource_id}>{item.name}</div>
            <div
                key={item.resource_id}
                style={{
                    padding: "12px 24px 12px 24px",
                    width: "90%",
                    backgroundColor: selectedCategory === item.name ? "#ffffff" : "transparent",
                    borderRadius: selectedCategory === item.name ? "7px" : "transparent",
                    textAlign: "center",
                }}
            >
                <NavLink
                    key={item.resource_id}
                    to={`/${item.name}`}
                    style={{
                        textDecoration: "none",
                        color: selectedCategory === item.name ? "#035FA2" : "#333",
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

    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <Drawer anchor="top" open={open} onClose={onClose}  sx={{ height: "100%"}}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                }}
            >
                <img
                    src="/images/logo.png"
                    alt="Росатом"
                    style={{ margin: "1em 1em",
                        width: '25%'
                    }}
                />


                <div style={{
                    padding: "12px 24px 12px 24px",
                    width: "90%",
                    backgroundColor: selectedCategory === null ? "#ffffff" : "transparent",
                    borderRadius: selectedCategory === null ? "7px" : "transparent",
                    textAlign: "center",
                }}>
                    <NavLink
                        key={"allDocuments"}
                        to={"/"}
                        onClick={() => setSelectedCategory(null)}
                        style={{
                            textDecoration: "none",
                            color: selectedCategory === null ? "#035FA2" : "#333",
                            cursor: "pointer",
                        }}
                    >
                        Все документы
                    </NavLink>
                </div>
                {content}

                <Fab
                    variant="extended"
                    sx={{
                        width: "30%",
                        backgroundColor: "#035FA2",
                        color: "white",
                        marginTop: "2em",
                        marginBottom: "2em",
                        display: "flex",
                        justifyContent: "space-between",
                        transition: "background-color 0.5s",
                        fontSize: "15px",
                        "&:hover": {
                            backgroundColor: "#024978",
                        },
                    }}
                    size="large"
                >
                    Документ
                    <AddIcon/>
                </Fab>
            </div>
        </Drawer>
    );
}

export default MobileMenu;
