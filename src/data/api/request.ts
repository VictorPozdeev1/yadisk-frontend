import axios from "axios";

import Document from "../contracts/Document";
import Category from "../contracts/Category";

import token from "./token";

export const CATEGORIES_URL = 'CaseLabDocuments',
    BASE_URL = 'https://cloud-api.yandex.net/v1/disk/resources';



export const getCategories = async () => {
    try {

        const response = await axios.get<{ _embedded: { items: Category[] } }>(BASE_URL, {
            params: {
                path: `${CATEGORIES_URL}`,
                fields: '_embedded.items.name, _embedded.items.resource_id'
            },
            headers: {
                Authorization: token,
            }
        })

        return response.data._embedded.items
    } catch (err) {
        console.log(err)
    }
}

export const getDocuments = async (categories: string) => {
    try {
        const response = await axios.get<{ _embedded: { items: Document[] } }>(BASE_URL, {
            params: {
                path: `${CATEGORIES_URL}/${categories}`,
                fields: '_embedded.items.name, _embedded.items.resource_id, _embedded.items.file',
            },
            headers: {
                // Authorization: 'здесь должен быть токен'
            }
        })

        return response.data._embedded.items
    } catch (err) {
        console.log(err)
    }
}







