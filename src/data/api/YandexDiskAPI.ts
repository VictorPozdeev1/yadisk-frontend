import { Category } from "../contracts/category";
import { Documents } from "../contracts/document";


export interface YandexDiskAPI {
    // Получение списка всех документов.
    getDocuments(): Promise<Documents[]>;
    // Получение списка всех категорий.
    getCategories(): Promise<Category[]>;
    // Создание новой категории
    createCategory(name: string): Promise<Category>;
    // Создание нового документа.
    createDocument(name: string, categoryId: string, file: File): Promise<Documents>;
    // Перемещение документа из одной категории в другую.
    moveDocument(documentId: string, newCategoryId: string): Promise<void>;
    // Удаление документа.

    deleteDocument(documentId: string): Promise<void>;
}