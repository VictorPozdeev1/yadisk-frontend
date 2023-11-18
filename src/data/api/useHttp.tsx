import axios, { AxiosRequestConfig } from "axios";
import token from "./token";

export const useHttp = () => {
    const request = async (
        url: string,
        method = "GET",
        data = null,
        config: AxiosRequestConfig = {
            headers: {
                "Content-Type": "application/json",
                 Authorization: token,
            },
        }
    ) => {
        try {
            const response = await axios({ url, method, data, ...config });

            if (response.status < 200 || response.status >= 300) {
                alert(`Error ${response.status}: Cannot make a request to the address ${url}`);
                throw new Error(`Could not fetch ${url}, status ${response.status}`);
            }

            return response.data;
        } catch (error: any) {
            if (!navigator.onLine) {
                alert(`Error: no internet access`);
            } else {
                alert(`Error ${error.message}`);
            }
            throw error;
        }
    };

    return request;
};

export default useHttp()
