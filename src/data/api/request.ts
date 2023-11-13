import axios from "axios";

import { Documents } from "../contracts/document";
import { Category } from "../contracts/category";

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
                Authorization: 'y0_AgAAAABx72gLAADLWwAAAADxNjwrcCUbblaLR7-wFvKuoqqfkC0tkGQ'
            }
        })

        return response.data._embedded.items
    } catch (err) {
        console.log(err)
    }
}

export const getDocuments = async (categories: string) => {
    try {
        const response = await axios.get<{ _embedded: { items: Documents[] } }>(BASE_URL, {
            params: {
                path: `${CATEGORIES_URL}/${categories}`,
                fields: '_embedded.items.name, _embedded.items.resource_id, _embedded.items.file',
            },
            headers: {
                Authorization: 'y0_AgAAAABx72gLAADLWwAAAADxNjwrcCUbblaLR7-wFvKuoqqfkC0tkGQ'
            }
        })

        return response.data._embedded.items
    } catch (err) {
        console.log(err)
    }
}







