import {
  runInAction,
  makeAutoObservable,
  reaction,
  makeObservable,
  observable,
  action,
} from "mobx";
import YandexDiskAPI from "../data/api/request";

import Document from "../data/contracts/Document";
const { getDocumentsByCategory, getDocuments, deleteDocument, switchCategory } =
  YandexDiskAPI;

class ApiStoreDocument {
  documents: Array<Document> = [];

  async loadDocuments() {
    const documents = (await getDocuments()) as Document[];
    runInAction(() => {
      this.documents = documents;
    });
  }

  async delDoc(path: string) {
    await deleteDocument(path);
    const documents = (await getDocuments()) as Document[];
    runInAction(() => {
      this.documents = documents;
    });
  }

  async switchCat(from: string, category: string, fileName: string) {
    await switchCategory(from, category, fileName);
    const documents = (await getDocuments()) as Document[];
    runInAction(() => {
      this.documents = documents;
    });
  }

  constructor() {
    makeObservable(this, {
      documents: observable,
      loadDocuments: action,
      delDoc: action,
      switchCat: action,
    });
  }
}

export default ApiStoreDocument;
