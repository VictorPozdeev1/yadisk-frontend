import { runInAction, action, makeObservable, observable } from "mobx";
import YandexDiskAPI from "../data/api/request";
import Category from "../data/contracts/Category";
import { errorState } from "./index";

const { getCategories } = YandexDiskAPI;

class ApiStoreCategories {
  categories: Array<Category> = [];

  async loadCategories() {
    try {
      const categories = (await getCategories()) as Category[];
      runInAction(() => {
        this.categories = categories;
      });
    }
    catch (e: unknown) {
      errorState.enqueue((e as Error).message);
    }
  }

  constructor() {
    makeObservable(this, {
      categories: observable,
      loadCategories: action,
    });
  }
}

export default ApiStoreCategories;
