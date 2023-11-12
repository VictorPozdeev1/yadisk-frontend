import {injectStores} from "@mobx-devtools/tools"
import ApiStoreCategories from "./apiStoreCategories";
import ApiStoreDocument from "./apiStoreDocument";
import { Category } from "../data/contracts/category";
import { getDocuments } from "../data/api/request";
import { Documents } from "../data/contracts/document";

const apiStoreCategories = new ApiStoreCategories();
apiStoreCategories.loadCategories();
const apiStoreDocuments = new ApiStoreDocument();

//   apiStoreCategories.categories.forEach(async (item:Category)=>{
//       let file:Array<Documents>= [];
//       file = await getDocuments(item.name) as Documents[];
//       file.forEach((i:Documents)=>{
//           documents.push(i);
//           i["categoryId"] =  item.id;
//       })
//   })
  


injectStores({
    apiStoreCategories,
    apiStoreDocuments
});

export {apiStoreCategories,apiStoreDocuments}