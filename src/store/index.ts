import { injectStores } from "@mobx-devtools/tools";
import ApiStoreCategories from "./apiStoreCategories";
import ApiStoreDocument from "./apiStoreDocument";

const apiStoreCategories = new ApiStoreCategories();

const apiStoreDocuments = new ApiStoreDocument();

injectStores({
  apiStoreCategories,
  apiStoreDocuments,
});

export { apiStoreCategories, apiStoreDocuments };
