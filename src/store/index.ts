import { injectStores } from "@mobx-devtools/tools";
import ApiStoreCategories from "./apiStoreCategories";
import ApiStoreDocument from "./apiStoreDocument";
import ErrorState from "./ErrorState";

const apiStoreCategories = new ApiStoreCategories();
const apiStoreDocuments = new ApiStoreDocument();
const errorState = new ErrorState();

injectStores({
  apiStoreCategories,
  apiStoreDocuments,
  errorState,
});

export { apiStoreCategories, apiStoreDocuments, errorState, };
