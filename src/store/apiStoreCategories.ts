import { runInAction, action, makeObservable, observable } from "mobx";
import { getCategories } from "../data/api/request";
import Category from "../data/contracts/Category";

class ApiStoreCategories {
    categories: Array<Category> = [];

    async load() {
        const categories = await getCategories() as Category[];
        runInAction(() => {
            this.categories = categories;
        })

    }

    constructor() {
        makeObservable(this, {
            categories: observable,
            load: action
        });
    }


}

export default ApiStoreCategories