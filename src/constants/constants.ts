export const BASE_URL_PROD = "https://api.mangadex.org/";
export const BASE_URL_DEV = "https://api.mangadex.dev/";
export const BASE_URL = __DEV__ ? BASE_URL_DEV : BASE_URL_PROD;