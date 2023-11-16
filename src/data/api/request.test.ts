import fetchMock from 'jest-fetch-mock';
import axios from 'axios';
import { getCategories, getDocuments } from './request';
import token from "./token";

beforeEach(() => {
    fetchMock.resetMocks();
    jest.clearAllMocks();
});

describe('getCategories', () => {
    it('fetches successfully data from an API', async () => {
        jest.spyOn(axios, 'get').mockResolvedValue({ data: { _embedded: { items: [] } } });

        const data = await getCategories();
        expect(data).toEqual([]);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(
            'https://cloud-api.yandex.net/v1/disk/resources',
            expect.objectContaining({
                params: {
                    path: 'CaseLabDocuments',
                    fields: '_embedded.items.name, _embedded.items.resource_id',
                },
                headers: {
                    Authorization: token,
                },
            })
        );
    });
});

describe('getDocuments', () => {
    it('fetches successfully data from an API', async () => {
        jest.spyOn(axios, 'get').mockResolvedValue({ data: { _embedded: { items: [] } } });

        const data = await getDocuments('someCategory');
        expect(data).toEqual([]);
        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(
            'https://cloud-api.yandex.net/v1/disk/resources',
            expect.objectContaining({
                params: {
                    path: 'CaseLabDocuments/someCategory',
                    fields: '_embedded.items.name, _embedded.items.resource_id, _embedded.items.file',
                },
                headers: {
                    Authorization: token,
                },
            })
        );
    });
});