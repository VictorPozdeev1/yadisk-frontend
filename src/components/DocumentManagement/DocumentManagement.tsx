import React, { useState } from 'react';
import Sidebar from './SideBar/SideBar';
import DocumentList from './DocumentList/DocumentList';
import { CssBaseline } from '@mui/material';
import styles from './DocumentManagement.module.css';

const categories = [
    { id: 0, name: 'Все категории' },
    { id: 1, name: 'Категория 1' },
    { id: 2, name: 'Категория 2' },
    { id: 3, name: 'Категория 3' },
];

const documentsByCategory: { [key: number]: { id: number; title: string, category: string }[] } = {
    0: [
        { id: 1, title: 'Документ 1', category: 'Категория 1' },
        { id: 2, title: 'Документ 2', category: 'Категория 2' },
        { id: 3, title: 'Документ 3', category: 'Категория 1' },
    ],
    1: [
        { id: 1, title: 'Документ 1', category: 'Категория 1' },
        { id: 2, title: 'Документ 2', category: 'Категория 2' },
    ],
    2: [
        { id: 3, title: 'Документ 3', category: 'Категория 3' },
    ],
    3: [],
};

function DocumentManagement() {
    const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

    const selectedDocuments = documentsByCategory[selectedCategory];

    const handleCategorySelect = (categoryId: number) => {
        setSelectedCategory(categoryId);
    };

    return (
        <div className={styles.documentManagementContainer}>
            <CssBaseline />
            <Sidebar
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategorySelect}
            />
            <div className={styles.documentListContainer}>
                <DocumentList documents={selectedDocuments} currentCategory={categories[selectedCategory].name} />
            </div>
        </div>
    );
}

export default DocumentManagement;
