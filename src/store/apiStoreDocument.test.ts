import ApiStoreCategories from "./apiStoreCategories";
import { getCategories } from "../data/api/request";

jest.mock("../data/api/request");

describe("ApiStoreCategories", () => {
    beforeEach(() => {
        // Сбросить моки перед каждым тестом
        jest.clearAllMocks();
    });

    it("should initialize with an empty array of categories", () => {
        const apiStore = new ApiStoreCategories();
        expect(apiStore.categories).toEqual([]);
    });

    it("should load categories and update the state", async () => {
        const mockCategories = [
            { name: "Category1", resource_id: "123" },
            { name: "Category2", resource_id: "456" },
        ];

        (getCategories as jest.MockedFunction<typeof getCategories>).mockResolvedValue(mockCategories);

        const apiStore = new ApiStoreCategories();

        await apiStore.load();

        expect(getCategories).toHaveBeenCalled();
        expect(apiStore.categories).toEqual(mockCategories);
    });
});
