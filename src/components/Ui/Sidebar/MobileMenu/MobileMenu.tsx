import React, { useState } from "react";
import { Drawer, Fab, List, ListItem, ListItemText, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import styles from "../Sidebar.module.css";

interface MobileMenuProps {
    categories: any[];
    open: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ categories, open, onClose }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleCategoryClick = (categoryName: string) => {
        navigate(`/${categoryName}`);
        onClose();
        setSelectedCategory(categoryName);
    };

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
                className={styles.logoImage}
                style={{ margin: "1em 1em" }}
            />
            <List sx={{ flexDirection: "column", alignItems: "center", paddingTop: "5px", width: "90%" }}>
                {categories.map((item) => (
                    <ListItem
                        key={item.resource_id}
                        onClick={() => handleCategoryClick(item.name)}
                        sx={{
                            backgroundColor: selectedCategory === item.name ? "#e0e0e0" : "transparent",
                            borderRadius: "7px",
                        }}
                    >
                        <ListItemText primary={item.name} />
                    </ListItem>
                ))}
            </List>
            <Fab
                variant="extended"
                sx={{
                    width: "40%",
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
                <AddIcon />
            </Fab>
            </div>
        </Drawer>
    );
};

export default MobileMenu;
