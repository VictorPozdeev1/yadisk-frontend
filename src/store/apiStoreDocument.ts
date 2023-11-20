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

  async load() {
    const documents = (await getDocuments()) as Document[];
    runInAction(() => {
      this.documents = documents;
    });
  }

  async delete(path:string){
    deleteDocument(path);
    const documents = (await getDocuments()) as Document[];
    runInAction(() => {
      this.documents = documents;
    });
  }

  async switchCategory(from:string, category:string, fileName:string){
    switchCategory(from,category,fileName);
    const documents = (await getDocuments()) as Document[];
    runInAction(() => {
      this.documents = documents;
    });
  }

  constructor() {
    makeObservable(this, {
      documents: observable,
      load: action,
      delete:action,
      switchCategory: action
    });
  }
}

export default ApiStoreDocument;
