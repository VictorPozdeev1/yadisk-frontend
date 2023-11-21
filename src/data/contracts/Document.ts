export default interface Document {
  resource_id: string; // Уникальный идентификатор документа
  name: string; // Имя документа
  categoryId?: string; // Идентификатор категории, к которой документ принадлежит
  file: string; // URL изображения документа (png)
  preview: string; // URL минифицированной версии изображения документа (png)
  sizes: Array<{ url: string }>;
  category: string;
  path: string;
}
