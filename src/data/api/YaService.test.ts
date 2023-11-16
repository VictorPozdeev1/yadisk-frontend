import YaService from "./YaService";

jest.mock("./useHttp", () => ({
    useHttp: jest.fn(),
}));

describe("YaService", () => {
    const mockRequest = jest.fn();

    beforeAll(() => {
        require("./useHttp").useHttp.mockImplementation(() => mockRequest);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should fetch all categories", async () => {
        const expectedCategories = ["Category1", "Category2"];
        const mockResponse = {
            _embedded: {
                items: expectedCategories.map((name) => ({ name })),
            },
        };

        mockRequest.mockResolvedValueOnce(mockResponse);

        const result = await YaService().getAllCategoriesName();

        expect(result).toEqual(expectedCategories);
    });

    it("should fetch all items", async () => {
        const expectedItems = [
            { preview: "preview1", file: "file1", name: "Item1", resource_id: 1, sizes: [{ url: "url1" }] },
            { preview: "preview2", file: "file2", name: "Item2", resource_id: 2, sizes: [{ url: "url2" }] },
        ];
        const mockResponse = {
            items: expectedItems,
        };

        mockRequest.mockResolvedValueOnce(mockResponse);

        const result = await YaService().getAllItems();

        expect(result).toEqual(
            expectedItems.map((item) => ({
                src: item.preview,
                pathForDownload: item.file,
                name: item.name,
                id: item.resource_id,
                url: item.sizes[0].url,
            }))
        );
    });
});
