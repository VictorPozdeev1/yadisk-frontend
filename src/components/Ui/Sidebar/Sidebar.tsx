import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Fab, IconButton, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import MobileMenu from "./MobileMenu/MobileMenu";
import styles from "./Sidebar.module.css";

const Sidebar: FC<any> = ({ categories }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const isMobile = useMediaQuery('(max-width: 768px)');

    const content = categories
        ? categories.map((item: any) => (
            <div
                key={item.resource_id}
                style={{
                    padding: "12px 24px 12px 24px",
                    width: "90%",
                    backgroundColor:
                        selectedCategory === item.name ? "#ffffff" : "transparent",
                    borderRadius:
                        selectedCategory === item.name ? "7px" : "transparent",
                }}
            >
                <Link
                    to={`/${item.name}`}
                    style={{
                        textDecoration: "none",
                        color:
                            selectedCategory === item.name ? "#035FA2" : "#333",
                    }}
                    onClick={() => setSelectedCategory(item.name)}
                >
                    {item.name}
                </Link>
            </div>
        ))
        : null;

    return (
        <div
            data-testid="sidebar_test"
            style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "left",
            }}
        >

            {isMobile && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        marginTop: "1em",

                    }}
                >
                    <IconButton onClick={() => setMobileMenuOpen(true)}>
                        <MenuIcon />
                    </IconButton>

                    <img
                        src="/images/logo.png"
                        alt="Росатом"
                        className={styles.logoImage}
                        style={{ margin: "0 auto" }}
                    />
                </div>
            )}


            {!isMobile && (
                <img
                    src="/images/logo.png"
                    alt="Росатом"
                    className={styles.logoImage}
                />
            )}

            {isMobile ? null : content}
            {!isMobile && (
                <Fab
                    variant="extended"
                    sx={{
                        width: "70%",
                        marginTop: "auto",
                        backgroundColor: "#035FA2",
                        color: "white",
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
                    <AddIcon />
                </Fab>
            )}

            {isMobile && (
                <MobileMenu
                    categories={categories}
                    open={mobileMenuOpen}
                    onClose={() => setMobileMenuOpen(false)}
                />
            )}
        </div>
    );
};

export default Sidebar;
