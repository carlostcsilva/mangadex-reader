/* tslint:disable */
/* eslint-disable */
/**
 * MangaDex API
 * MangaDex is an ad-free manga reader offering high-quality images!  This document details our API as it is right now. It is in no way a promise to never change it, although we will endeavour to publicly notify any major change.  # Acceptable use policy  Usage of our services implies acceptance of the following: - You **MUST** credit us - You **MUST** credit scanlation groups if you offer the ability to read chapters - You **CANNOT** run ads or paid services on your website and/or apps  These may change at any time for any and no reason and it is up to you check for updates from time to time.  # Security issues  If you believe you found a security issue in our API, please check our [security.txt](/security.txt) to get in touch privately. 
 *
 * OpenAPI spec version: 5.10.0
 * Contact: support@mangadex.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { InlineResponse20014 } from '../models';
import { InlineResponse20015 } from '../models';
import { InlineResponse20016 } from '../models';
/**
 * StatisticsApi - axios parameter creator
 * @export
 */
export const StatisticsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get statistics about given chapter
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatisticsChapterUuid: async (uuid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling getStatisticsChapterUuid.');
            }
            const localVarPath = `/statistics/chapter/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get statistics about given chapters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatisticsChapters: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/statistics/chapter`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get statistics about given scanlation group
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatisticsGroupUuid: async (uuid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling getStatisticsGroupUuid.');
            }
            const localVarPath = `/statistics/group/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get statistics about given groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatisticsGroups: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/statistics/group`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Find statistics about given Manga
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatisticsManga: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/statistics/manga`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get statistics about given Manga
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStatisticsMangaUuid: async (uuid: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling getStatisticsMangaUuid.');
            }
            const localVarPath = `/statistics/manga/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StatisticsApi - functional programming interface
 * @export
 */
export const StatisticsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get statistics about given chapter
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatisticsChapterUuid(uuid: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20014>>> {
            const localVarAxiosArgs = await StatisticsApiAxiosParamCreator(configuration).getStatisticsChapterUuid(uuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get statistics about given chapters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatisticsChapters(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20014>>> {
            const localVarAxiosArgs = await StatisticsApiAxiosParamCreator(configuration).getStatisticsChapters(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get statistics about given scanlation group
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatisticsGroupUuid(uuid: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20014>>> {
            const localVarAxiosArgs = await StatisticsApiAxiosParamCreator(configuration).getStatisticsGroupUuid(uuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get statistics about given groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatisticsGroups(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20014>>> {
            const localVarAxiosArgs = await StatisticsApiAxiosParamCreator(configuration).getStatisticsGroups(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Find statistics about given Manga
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatisticsManga(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20016>>> {
            const localVarAxiosArgs = await StatisticsApiAxiosParamCreator(configuration).getStatisticsManga(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get statistics about given Manga
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatisticsMangaUuid(uuid: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20015>>> {
            const localVarAxiosArgs = await StatisticsApiAxiosParamCreator(configuration).getStatisticsMangaUuid(uuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * StatisticsApi - factory interface
 * @export
 */
export const StatisticsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Get statistics about given chapter
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatisticsChapterUuid(uuid: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20014>> {
            return StatisticsApiFp(configuration).getStatisticsChapterUuid(uuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get statistics about given chapters
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatisticsChapters(options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20014>> {
            return StatisticsApiFp(configuration).getStatisticsChapters(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get statistics about given scanlation group
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatisticsGroupUuid(uuid: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20014>> {
            return StatisticsApiFp(configuration).getStatisticsGroupUuid(uuid, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get statistics about given groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatisticsGroups(options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20014>> {
            return StatisticsApiFp(configuration).getStatisticsGroups(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Find statistics about given Manga
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatisticsManga(options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20016>> {
            return StatisticsApiFp(configuration).getStatisticsManga(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get statistics about given Manga
         * @param {string} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStatisticsMangaUuid(uuid: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20015>> {
            return StatisticsApiFp(configuration).getStatisticsMangaUuid(uuid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StatisticsApi - object-oriented interface
 * @export
 * @class StatisticsApi
 * @extends {BaseAPI}
 */
export class StatisticsApi extends BaseAPI {
    /**
     * 
     * @summary Get statistics about given chapter
     * @param {string} uuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatisticsApi
     */
    public async getStatisticsChapterUuid(uuid: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20014>> {
        return StatisticsApiFp(this.configuration).getStatisticsChapterUuid(uuid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get statistics about given chapters
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatisticsApi
     */
    public async getStatisticsChapters(options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20014>> {
        return StatisticsApiFp(this.configuration).getStatisticsChapters(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get statistics about given scanlation group
     * @param {string} uuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatisticsApi
     */
    public async getStatisticsGroupUuid(uuid: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20014>> {
        return StatisticsApiFp(this.configuration).getStatisticsGroupUuid(uuid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get statistics about given groups
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatisticsApi
     */
    public async getStatisticsGroups(options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20014>> {
        return StatisticsApiFp(this.configuration).getStatisticsGroups(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Find statistics about given Manga
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatisticsApi
     */
    public async getStatisticsManga(options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20016>> {
        return StatisticsApiFp(this.configuration).getStatisticsManga(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get statistics about given Manga
     * @param {string} uuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatisticsApi
     */
    public async getStatisticsMangaUuid(uuid: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20015>> {
        return StatisticsApiFp(this.configuration).getStatisticsMangaUuid(uuid, options).then((request) => request(this.axios, this.basePath));
    }
}
