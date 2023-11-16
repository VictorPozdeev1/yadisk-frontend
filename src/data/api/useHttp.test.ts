import { useHttp } from "./useHttp";
import token from "./token";

jest.mock("node-fetch");

describe("useHttp", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("should make a GET request with the correct parameters", async () => {
        const mockedFetch = jest.fn().mockResolvedValueOnce({
            ok: true,
            json: async () => ({ data: "example" }),
        });

        global.fetch = mockedFetch;

        const request = useHttp();
        const url = "https://example.com/api/data";

        await request(url);

        expect(mockedFetch).toHaveBeenCalledWith(url, {
            method: "GET",
            body: null,
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
        });
    });
});
