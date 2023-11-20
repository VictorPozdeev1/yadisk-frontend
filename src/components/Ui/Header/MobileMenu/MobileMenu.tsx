import React, { useState } from "react";
import { Drawer, Fab, IconButton, useMediaQuery } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {Link, NavLink} from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import { apiStoreCategories } from "../../../../store";
import { toJS } from "mobx";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    
    const categories = toJS(apiStoreCategories.categories);
    
    
    const content = categories ? (

        categories.map((item: any) => (
            //<div key={item.resource_id}>{item.name}</div>
            <div
                key={item.resource_id}
                style={{
                    
                    width: "90%",
                    backgroundColor: selectedCategory === item.name ? "#ededed" : "transparent",
                    borderRadius: selectedCategory === item.name ? "7px" : "transparent",
                    textAlign: "center",
                }}
                onClick={onClose}
            >
                <NavLink
                    key={item.resource_id}
                    to={`/${item.name}`}
                    style={{
                        padding: "12px 24px 12px 24px",
                        display: "block",
                        width: "100%",
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
        
        <Drawer anchor="right" open={open} onClose={onClose}  sx={{ height: "100%"}} >
            
            
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "start",
                    height: "100vh",
                    width:"320px",
                }}
                onClick={onClose}
            >  
                <IconButton onClick={onClose} sx={{margin:'1em 1em 1em auto'}}>
                    <MenuOpenIcon color="secondary"/>
                </IconButton>
                <div style={{
                    
                    width: "90%",
                    backgroundColor: selectedCategory === null ? "#ededed" : "transparent",
                    borderRadius: selectedCategory === null ? "7px" : "transparent",
                    textAlign: "center",
                }}>
                    <NavLink
                        key={"allDocuments"}
                        to={"/"}
                        onClick={() => setSelectedCategory(null)}
                        style={{
                            padding: "12px 24px 12px 24px",
                            display: "block",
                            width: "100%",
                            textDecoration: "none",
                            color: selectedCategory === null ? "#035FA2" : "#333",
                            cursor: "pointer",
                        }}
                    >
                        Все документы
                    </NavLink>
                </div>
                {content}

                
            </div>
        </Drawer>
    );
}

export default MobileMenu;
