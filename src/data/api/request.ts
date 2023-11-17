import axios from "axios";

import Document from "../contracts/Document";
import Category from "../contracts/Category";

import token from "./token";

function getCategoryFromPath(path: string): string {
  const parts = path.split("/");
  const category = parts[parts.length - 2];
  return category;
}

export const CATEGORIES_URL = "CaseLabDocuments",
  BASE_URL = "https://cloud-api.yandex.net/v1/disk/resources";

export const getCategories = async () => {
  try {
    const response = await axios.get<{ _embedded: { items: Category[] } }>(
      BASE_URL,
      {
        params: {
          path: `${CATEGORIES_URL}`,
          fields: "_embedded.items.name, _embedded.items.resource_id",
        },
        headers: {
          Authorization: token,
        },
      }
    );

    return response.data._embedded.items;
  } catch (err) {
    console.log(err);
  }
};

export const getDocumentsByCategory = async (categories: string) => {
  try {
    const response = await axios.get<{ _embedded: { items: Document[] } }>(
      BASE_URL,
      {
        params: {
          path: `${CATEGORIES_URL}/${categories}`,
          fields:
            "_embedded.items.name, _embedded.items.resource_id, _embedded.items.file, _embedded.items.preview, _embedded.items.sizes",
        },
        headers: {
          Authorization: token,
        },
      }
    );

    return response.data._embedded.items;
  } catch (err) {
    console.log(err);
  }
};

export const getDocuments = async () => {
  try {
    const response = await axios.get<{ items: Document[] }>(
      `${BASE_URL}/files`,
      {
        params: {
          fields:
            "items.name, items.resource_id, items.file, items.preview, items.sizes, items.path",
        },
        headers: {
          Authorization: token,
        },
      }
    );

    return response.data.items.map((el) => ({
      ...el,
      category: getCategoryFromPath(el.path),
    }));
  } catch (err) {
    console.log(err);
  }
};

export const deleteDocument = async (path:string) => {
  try{
    const response = await axios.delete(
      `${BASE_URL}`,
      {
        params:{
          path: path, // путь к документу пример: CaseLabDocuments/Бухгалтерия/Зима.jpg
        },
        headers:{
          Authorization: token,
        }
      }
    )
    return response
  } catch(err){
    console.log(err)
  }
};

export const switchCategory = async (from:string, categoy:string, fileName:string) =>{
  try{
    
    const response = await axios.post(
      `${BASE_URL}/move`,
      null, 
      {headers:{
        'Authorization': token, 
      },params:{
        from:from,
        path:`${CATEGORIES_URL}/${categoy}/${fileName}`
      }});
    //getDocuments();
    return response
  } catch(err){
    console.log(err)
  }
};

// export const addDocument = async (url:string, path:string) =>{
//   try{
//     const response = await axios.post(
//       `${BASE_URL}/upload`,
//       {
//         params:{
//           path:path,  // куда будет помещен документ пример: CaseLabDocuments/Бухгалтерия
//           url: url // URL внешнего ресурса, который следует загрузить.
//         },
//         headers:{
//           Authorization: `${token}`,
//         }
        
//       }
//     )
//     return response
//   } catch(err){
//     console.log(err)
//   }
// }

