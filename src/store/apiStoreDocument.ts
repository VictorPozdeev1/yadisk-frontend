import {
  runInAction,
  makeAutoObservable,
  reaction,
  makeObservable,
  observable,
  action,
} from "mobx";
import { getDocumentsByCategory, getDocuments } from "../data/api/request";
import Document from "../data/contracts/Document";

class ApiStoreDocument {
  documents: Array<Document> = [];

  async loadDocuments() {
    const documents = (await getDocuments()) as Document[];
    runInAction(() => {
      this.documents = documents;
    });
  }

  constructor() {
    makeObservable(this, {
      documents: observable,
      loadDocuments: action,
    });
  }
}

export default ApiStoreDocument;
