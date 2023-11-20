import ApiStoreCategories from "./apiStoreCategories";
import YandexDiskAPI from "../data/api/request";

jest.mock("../data/api/request", () => ({
  getCategories: jest.fn(),
}));

describe("ApiStoreCategories", () => {
  it("should load categories correctly", async () => {
    const mockCategories = [
      { id: 1, name: "Category 1" },
      { id: 2, name: "Category 2" },
    ];

    (YandexDiskAPI.getCategories as jest.Mock).mockResolvedValueOnce(
      mockCategories
    );

    const apiStoreCategories = new ApiStoreCategories();

    await apiStoreCategories.loadCategories();

    expect(apiStoreCategories.categories).toEqual(mockCategories);
  });
});
