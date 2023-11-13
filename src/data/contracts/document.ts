export interface Documents {
    resource_id: string; // Уникальный идентификатор документа
    name: string; // Имя документа
    categoryId: string; // Идентификатор категории, к которой документ принадлежит
    file: string;// URL изображения документа (png)
}
