import React from 'react';
import { List, ListItemButton, Box } from '@mui/material';
import styles from './SideBar.module.css';

interface SidebarProps {
    categories: { id: number; name: string }[];
    selectedCategory: number;
    onSelectCategory: (categoryId: number) => void;
}

function Sidebar({ categories, selectedCategory, onSelectCategory }: SidebarProps) {
    return (
        <Box className={styles.sidebarContainer}>
            <img className={styles.logo} src="/images/logo.png" alt="Логотип" />
            <List component="nav" className={styles.customList}>
                {categories.map((category) => (
                    <ListItemButton
                        key={category.id}
                        onClick={() => onSelectCategory(category.id)}
                        className={`${styles.categoryItem} ${category.id === selectedCategory ? styles.selected : ''}`}
                    >
                        {category.name}
                    </ListItemButton>
                ))}
            </List>
        </Box>
    );
}

export default Sidebar;
