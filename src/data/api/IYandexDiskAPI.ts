import Category from "../contracts/Category";
import Document from "../contracts/Document";
import category from "../../components/pages/Category/Category";

export interface IYandexDiskAPI {
  // Получение списка всех документов.
  getDocuments(): Promise<Document[]>;

  // Получение списка всех категорий.
  getCategories(): Promise<Category[]>;

  // Создание новой категории
  //createCategory(name: string): Promise<Category>;

  // Создание нового документа.
  //createDocument(name: string, categoryId: string, file: File): Promise<Document>;

  // Перемещение документа из одной категории в другую.
  //moveDocument(documentId: string, newCategoryId: string): Promise<void>;

  // Удаление документа.
  deleteDocument(documentId: string): Promise<void>;

  getDocumentsByCategory(categories: string): Promise<Document[]>;

  switchCategory(
    from: string,
    category: string,
    fileName: string
  ): Promise<Category>;

  //addDocument: (url: string, path: string) => Promise<any>
}
