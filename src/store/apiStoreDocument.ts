import { runInAction, makeAutoObservable, reaction } from "mobx";
import { getDocuments } from "../data/api/request";
import Document from "../data/contracts/Document";
import { apiStoreCategories } from ".";
import Category from "../data/contracts/Category";

class ApiStoreDocument {

    documents: Array<Document> = [];
    categories: Array<Category> = [];

    loadDocuments(category: Array<Category>) {

        category.forEach(async (item: Category) => {
            let file: Array<Document> = [];

            file = await getDocuments(item.name) as Document[];
            file.forEach((i: Document) => {
                runInAction(() => {
                    i["categoryId"] = item.resource_id;
                    this.documents.push(i);
                })

            })

        })

    }

    constructor() {

        reaction(
            () => ({ categories: apiStoreCategories.categories }),
            ({ categories }) => {
                this.categories = categories;
            }
        )

        makeAutoObservable(this);

    }

}

export default ApiStoreDocument;