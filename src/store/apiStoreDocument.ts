import {
  runInAction,
  makeAutoObservable,
  reaction,
  makeObservable,
  observable,
  action,
} from "mobx";
import {
  getDocumentsByCategory,
  getDocuments,
  deleteDocument,
  switchCategory,
} from "../data/api/request";
import Document from "../data/contracts/Document";

class ApiStoreDocument {
  documents: Array<Document> = [];

  async loadDocuments() {
    const documents = (await getDocuments()) as Document[];
    runInAction(() => {
      this.documents = documents;
    });
  }

  // переписал на стрелочную,была проблема с контекстом
  delDoc = async (path: string) => {
    await deleteDocument(path);
    const documents = (await getDocuments()) as Document[];
    console.log(documents);
    runInAction(() => {
      this.documents = documents;
    });
  };

  async switchCat(from: string, category: string, fileName: string) {
    switchCategory(from, category, fileName);
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
