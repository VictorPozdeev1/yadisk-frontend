import axios from "axios";
import { getCategories } from "./request";
import token from "./token";

jest.mock("axios");

describe("API Requests", () => {
    it("should fetch categories correctly", async () => {
        const mockCategories = [
            { name: "Category1", resource_id: "123" },
            { name: "Category2", resource_id: "456" },
        ];

        const mockedResponse = {
            data: {
                _embedded: {
                    items: mockCategories,
                },
            },
        };

        (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue(mockedResponse);

        const categories = await getCategories();

        expect(axios.get).toHaveBeenCalledWith(expect.any(String), {
            params: {
                path: "CaseLabDocuments",
                fields: "_embedded.items.name, _embedded.items.resource_id",
            },
            headers: {
                Authorization: token,
            },
        });

        expect(categories).toEqual(mockCategories);
    });
});
