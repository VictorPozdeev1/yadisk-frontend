import {
  runInAction,
  makeAutoObservable,
  reaction,
  makeObservable,
  observable,
  action,
} from "mobx";
import { getDocumentsByCategory, getDocuments, deleteDocument, switchCategory } from "../data/api/request";
import Document from "../data/contracts/Document";

class ApiStoreDocument {
  documents: Array<Document> = [];

  async loadDocuments() {
    const documents = (await getDocuments()) as Document[];
    runInAction(() => {
      this.documents = documents;
    });
  }

  async delDoc(path:string){
    deleteDocument(path);
    const documents = (await getDocuments()) as Document[];
    runInAction(() => {
      this.documents = documents;
    });
  }

  async switchCat(from:string, categoy:string, fileName:string){
    switchCategory(from,categoy,fileName);
    const documents = (await getDocuments()) as Document[];
    runInAction(() => {
      this.documents = documents;
    });
  }

  constructor() {
    makeObservable(this, {
      documents: observable,
      loadDocuments: action,
      delDoc:action
    });
  }
}

export default ApiStoreDocument;
