import axios from "axios";
import Document from "../contracts/Document";
import Category from "../contracts/Category";
import token from "./token";
import { IYandexDiskAPI } from "./IYandexDiskAPI";

function getCategoryFromPath(path: string): string {
  const parts = path.split("/");
  const category = parts[parts.length - 2];
  return category;
}

export const CATEGORIES_URL = "CaseLabDocuments",
  BASE_URL = "https://cloud-api.yandex.net/v1/disk/resources";

const handleRequestError = (error: any) => {
  if (!navigator.onLine) {
    console.log("Error: no internet access");
  } else if (error.response) {
    const { status, data } = error.response;
    console.log(`Error ${status}: ${data}`);
    if (status === 401) {
      console.log(`Error: Handle unauthorized access`);
    } else if (status === 404) {
      console.log(`Error: Handle not found`);
    }
  } else if (error.request) {
    console.log("No response received");
  } else {
    console.log(`Error: ${error.message}`);
  }
  throw error;
};

const YandexDiskAPI: IYandexDiskAPI = {
  getCategories: async () => {
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
      handleRequestError(err);
      throw err;
    }
  },

  getDocumentsByCategory: async (categories: string) => {
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
      handleRequestError(err);
      throw err;
    }
  },

  getDocuments: async () => {
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
      handleRequestError(err);
      throw err;
    }
  },

  deleteDocument: async (path: string) => {
    try {
      const response = await axios.delete(`${BASE_URL}`, {
        params: {
          path: path, // путь к документу пример: CaseLabDocuments/Бухгалтерия/Зима.jpg
        },
        headers: {
          Authorization: token,
        },
      });
    } catch (err) {
      handleRequestError(err);
      throw err;
    }
  },

  switchCategory: async (from: string, category: string, fileName: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/move`, null, {
        headers: {
          Authorization: token,
        },
        params: {
          from: from,
          path: `${CATEGORIES_URL}/${category}/${fileName}`,
        },
      });
      await YandexDiskAPI.getDocuments();
      return response.data;
    } catch (err) {
      handleRequestError(err);
      throw err;
    }
  },
  /*addDocument: async (url:string, path:string) =>{
        try{
            const response = await axios.post(
                `${BASE_URL}/upload`,
                {
                    params:{
                        path:path,  // куда будет помещен документ пример: CaseLabDocuments/Бухгалтерия
                        url: url // URL внешнего ресурса, который следует загрузить.
                    },
                    headers:{
                        Authorization: `${token}`,
                    }

                }
            )
            return response
        } catch(err){
            console.log(err)
        }
    }*/
};
export default YandexDiskAPI;
