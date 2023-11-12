interface AppState {
    documents: Document[];
    categories: Category[];
    selectedCategory: string | null; // Идентификатор выбранной категории
    selectedDocument: string | null; // Идентификатор выбранного документа
}