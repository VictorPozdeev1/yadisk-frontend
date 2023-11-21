import {
  runInAction,
  makeAutoObservable,
  reaction,
  makeObservable,
  observable,
  action,
} from "mobx";
import YandexDiskAPI from "../data/api/request";
import { errorState } from "./index";

import Document from "../data/contracts/Document";
const { getDocumentsByCategory, getDocuments, deleteDocument, switchCategory } =
  YandexDiskAPI;

class ApiStoreDocument {
  documents: Array<Document> = [];

  async loadDocuments() {
    try {
      const documents = (await getDocuments()) as Document[];
      runInAction(() => {
        this.documents = documents;
      });
    }
    catch (e: unknown) {
      errorState.enqueue((e as Error).message);
    }
  }

  async delDoc(path: string) {
    try {
      await deleteDocument(path);
      const documents = (await getDocuments()) as Document[];
      runInAction(() => {
        this.documents = documents;
      });
    }
    catch (e: unknown) {
      errorState.enqueue((e as Error).message);
    }
  }

  async switchCat(from: string, category: string, fileName: string) {
    try {
      await switchCategory(from, category, fileName);
      const documents = (await getDocuments()) as Document[];
      runInAction(() => {
        this.documents = documents;
      });
    }
    catch (e: unknown) {
      errorState.enqueue((e as Error).message);
    }
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
