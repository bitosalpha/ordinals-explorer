import axios from "axios";
import { networkUtils } from "./networkUtils";

// Embed the API key directly into the code
const apiKey = '354db5f9b29dd21d6f8a632ab7cec5f2af941ae2298c848b44633bac57d55c36';

function createApi(baseURL: string) {
    const api = axios.create({
        baseURL,
        timeout: 10000,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}` // Include the API key in the headers
        },
    })

    return api;
}

const mainnetApi = createApi("https://open-api.unisat.io");
const testnetApi = createApi("https://open-api-testnet.unisat.io");

function getApi() {
    return networkUtils.isTestnet() ? testnetApi : mainnetApi;
}


export const get = async (url: string, params?: any) => {
    const res = await getApi().get(url, { params });
    if (res.status !== 200) {
        throw new Error(res.statusText);
    }

    const responseData = res.data;

    if (responseData.code !== 0) {
        throw new Error(responseData.msg);
    }
    return responseData.data;
};

export const post = async (url: string, data?: any) => {
    const res = await getApi().post(url, data);
    if (res.status !== 200) {
        throw new Error(res.statusText);
    }

    const responseData = res.data;

    if (responseData.code !== 0) {
        throw new Error(responseData.msg);
    }

    return responseData.data;
}
