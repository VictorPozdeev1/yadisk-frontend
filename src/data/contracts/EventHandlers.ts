interface EventHandlers {
    onCategorySelected(categoryId: string): void;
    onDocumentSelected(documentId: string): void;
    onDocumentDeleted(documentId: string): void;
    onDocumentMoved(documentId: string, newCategoryId: string): void;
}
