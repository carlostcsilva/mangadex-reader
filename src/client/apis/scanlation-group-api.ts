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
import { CreateScanlationGroup } from '../models';
import { ErrorResponse } from '../models';
import { ReferenceExpansionScanlationGroup } from '../models';
import { Response } from '../models';
import { ScanlationGroupEdit } from '../models';
import { ScanlationGroupList } from '../models';
import { ScanlationGroupResponse } from '../models';
/**
 * ScanlationGroupApi - axios parameter creator
 * @export
 */
export const ScanlationGroupApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete Scanlation Group
         * @param {string} id Scanlation Group ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteGroupId: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteGroupId.');
            }
            const localVarPath = `/group/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
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
         * @summary Unfollow Scanlation Group
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteGroupIdFollow: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deleteGroupIdFollow.');
            }
            const localVarPath = `/group/{id}/follow`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
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
         * @summary Get Scanlation Group
         * @param {string} id Scanlation Group ID
         * @param {ReferenceExpansionScanlationGroup} [includes] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getGroupId: async (id: string, includes?: ReferenceExpansionScanlationGroup, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getGroupId.');
            }
            const localVarPath = `/group/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (includes !== undefined) {
                localVarQueryParameter['includes[]'] = includes;
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
         * @summary Scanlation Group list
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {Array<string>} [ids] ScanlationGroup ids (limited to 100 per request)
         * @param {string} [name] 
         * @param {string} [focusedLanguage] 
         * @param {ReferenceExpansionScanlationGroup} [includes] 
         * @param {string} [orderName] 
         * @param {string} [orderCreatedAt] 
         * @param {string} [orderUpdatedAt] 
         * @param {string} [orderFollowedCount] 
         * @param {string} [orderRelevance] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSearchGroup: async (limit?: number, offset?: number, ids?: Array<string>, name?: string, focusedLanguage?: string, includes?: ReferenceExpansionScanlationGroup, orderName?: string, orderCreatedAt?: string, orderUpdatedAt?: string, orderFollowedCount?: string, orderRelevance?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/group`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (ids) {
                localVarQueryParameter['ids[]'] = ids;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (focusedLanguage !== undefined) {
                localVarQueryParameter['focusedLanguage'] = focusedLanguage;
            }

            if (includes !== undefined) {
                localVarQueryParameter['includes[]'] = includes;
            }

            if (orderName !== undefined) {
                localVarQueryParameter['order[name]'] = orderName;
            }

            if (orderCreatedAt !== undefined) {
                localVarQueryParameter['order[createdAt]'] = orderCreatedAt;
            }

            if (orderUpdatedAt !== undefined) {
                localVarQueryParameter['order[updatedAt]'] = orderUpdatedAt;
            }

            if (orderFollowedCount !== undefined) {
                localVarQueryParameter['order[followedCount]'] = orderFollowedCount;
            }

            if (orderRelevance !== undefined) {
                localVarQueryParameter['order[relevance]'] = orderRelevance;
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
         * @summary Create Scanlation Group
         * @param {string} contentType 
         * @param {CreateScanlationGroup} [body] The size of the body is limited to 16KB.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postGroup: async (contentType: string, body?: CreateScanlationGroup, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contentType' is not null or undefined
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling postGroup.');
            }
            const localVarPath = `/group`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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

            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Follow Scanlation Group
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postGroupIdFollow: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling postGroupIdFollow.');
            }
            const localVarPath = `/group/{id}/follow`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
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
         * @summary Update Scanlation Group
         * @param {string} contentType 
         * @param {string} id Scanlation Group ID
         * @param {ScanlationGroupEdit} [body] The size of the body is limited to 8KB.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putGroupId: async (contentType: string, id: string, body?: ScanlationGroupEdit, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contentType' is not null or undefined
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling putGroupId.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling putGroupId.');
            }
            const localVarPath = `/group/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
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

            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ScanlationGroupApi - functional programming interface
 * @export
 */
export const ScanlationGroupApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete Scanlation Group
         * @param {string} id Scanlation Group ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteGroupId(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Response>>> {
            const localVarAxiosArgs = await ScanlationGroupApiAxiosParamCreator(configuration).deleteGroupId(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Unfollow Scanlation Group
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteGroupIdFollow(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Response>>> {
            const localVarAxiosArgs = await ScanlationGroupApiAxiosParamCreator(configuration).deleteGroupIdFollow(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get Scanlation Group
         * @param {string} id Scanlation Group ID
         * @param {ReferenceExpansionScanlationGroup} [includes] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroupId(id: string, includes?: ReferenceExpansionScanlationGroup, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ScanlationGroupResponse>>> {
            const localVarAxiosArgs = await ScanlationGroupApiAxiosParamCreator(configuration).getGroupId(id, includes, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Scanlation Group list
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {Array<string>} [ids] ScanlationGroup ids (limited to 100 per request)
         * @param {string} [name] 
         * @param {string} [focusedLanguage] 
         * @param {ReferenceExpansionScanlationGroup} [includes] 
         * @param {string} [orderName] 
         * @param {string} [orderCreatedAt] 
         * @param {string} [orderUpdatedAt] 
         * @param {string} [orderFollowedCount] 
         * @param {string} [orderRelevance] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSearchGroup(limit?: number, offset?: number, ids?: Array<string>, name?: string, focusedLanguage?: string, includes?: ReferenceExpansionScanlationGroup, orderName?: string, orderCreatedAt?: string, orderUpdatedAt?: string, orderFollowedCount?: string, orderRelevance?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ScanlationGroupList>>> {
            const localVarAxiosArgs = await ScanlationGroupApiAxiosParamCreator(configuration).getSearchGroup(limit, offset, ids, name, focusedLanguage, includes, orderName, orderCreatedAt, orderUpdatedAt, orderFollowedCount, orderRelevance, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Create Scanlation Group
         * @param {string} contentType 
         * @param {CreateScanlationGroup} [body] The size of the body is limited to 16KB.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postGroup(contentType: string, body?: CreateScanlationGroup, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ScanlationGroupResponse>>> {
            const localVarAxiosArgs = await ScanlationGroupApiAxiosParamCreator(configuration).postGroup(contentType, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Follow Scanlation Group
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postGroupIdFollow(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Response>>> {
            const localVarAxiosArgs = await ScanlationGroupApiAxiosParamCreator(configuration).postGroupIdFollow(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Update Scanlation Group
         * @param {string} contentType 
         * @param {string} id Scanlation Group ID
         * @param {ScanlationGroupEdit} [body] The size of the body is limited to 8KB.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putGroupId(contentType: string, id: string, body?: ScanlationGroupEdit, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ScanlationGroupResponse>>> {
            const localVarAxiosArgs = await ScanlationGroupApiAxiosParamCreator(configuration).putGroupId(contentType, id, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ScanlationGroupApi - factory interface
 * @export
 */
export const ScanlationGroupApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Delete Scanlation Group
         * @param {string} id Scanlation Group ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteGroupId(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Response>> {
            return ScanlationGroupApiFp(configuration).deleteGroupId(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Unfollow Scanlation Group
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteGroupIdFollow(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Response>> {
            return ScanlationGroupApiFp(configuration).deleteGroupIdFollow(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Scanlation Group
         * @param {string} id Scanlation Group ID
         * @param {ReferenceExpansionScanlationGroup} [includes] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getGroupId(id: string, includes?: ReferenceExpansionScanlationGroup, options?: AxiosRequestConfig): Promise<AxiosResponse<ScanlationGroupResponse>> {
            return ScanlationGroupApiFp(configuration).getGroupId(id, includes, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Scanlation Group list
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {Array<string>} [ids] ScanlationGroup ids (limited to 100 per request)
         * @param {string} [name] 
         * @param {string} [focusedLanguage] 
         * @param {ReferenceExpansionScanlationGroup} [includes] 
         * @param {string} [orderName] 
         * @param {string} [orderCreatedAt] 
         * @param {string} [orderUpdatedAt] 
         * @param {string} [orderFollowedCount] 
         * @param {string} [orderRelevance] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSearchGroup(limit?: number, offset?: number, ids?: Array<string>, name?: string, focusedLanguage?: string, includes?: ReferenceExpansionScanlationGroup, orderName?: string, orderCreatedAt?: string, orderUpdatedAt?: string, orderFollowedCount?: string, orderRelevance?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ScanlationGroupList>> {
            return ScanlationGroupApiFp(configuration).getSearchGroup(limit, offset, ids, name, focusedLanguage, includes, orderName, orderCreatedAt, orderUpdatedAt, orderFollowedCount, orderRelevance, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create Scanlation Group
         * @param {string} contentType 
         * @param {CreateScanlationGroup} [body] The size of the body is limited to 16KB.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postGroup(contentType: string, body?: CreateScanlationGroup, options?: AxiosRequestConfig): Promise<AxiosResponse<ScanlationGroupResponse>> {
            return ScanlationGroupApiFp(configuration).postGroup(contentType, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Follow Scanlation Group
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postGroupIdFollow(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Response>> {
            return ScanlationGroupApiFp(configuration).postGroupIdFollow(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Scanlation Group
         * @param {string} contentType 
         * @param {string} id Scanlation Group ID
         * @param {ScanlationGroupEdit} [body] The size of the body is limited to 8KB.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putGroupId(contentType: string, id: string, body?: ScanlationGroupEdit, options?: AxiosRequestConfig): Promise<AxiosResponse<ScanlationGroupResponse>> {
            return ScanlationGroupApiFp(configuration).putGroupId(contentType, id, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ScanlationGroupApi - object-oriented interface
 * @export
 * @class ScanlationGroupApi
 * @extends {BaseAPI}
 */
export class ScanlationGroupApi extends BaseAPI {
    /**
     * 
     * @summary Delete Scanlation Group
     * @param {string} id Scanlation Group ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScanlationGroupApi
     */
    public async deleteGroupId(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Response>> {
        return ScanlationGroupApiFp(this.configuration).deleteGroupId(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Unfollow Scanlation Group
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScanlationGroupApi
     */
    public async deleteGroupIdFollow(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Response>> {
        return ScanlationGroupApiFp(this.configuration).deleteGroupIdFollow(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get Scanlation Group
     * @param {string} id Scanlation Group ID
     * @param {ReferenceExpansionScanlationGroup} [includes] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScanlationGroupApi
     */
    public async getGroupId(id: string, includes?: ReferenceExpansionScanlationGroup, options?: AxiosRequestConfig) : Promise<AxiosResponse<ScanlationGroupResponse>> {
        return ScanlationGroupApiFp(this.configuration).getGroupId(id, includes, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Scanlation Group list
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {Array<string>} [ids] ScanlationGroup ids (limited to 100 per request)
     * @param {string} [name] 
     * @param {string} [focusedLanguage] 
     * @param {ReferenceExpansionScanlationGroup} [includes] 
     * @param {string} [orderName] 
     * @param {string} [orderCreatedAt] 
     * @param {string} [orderUpdatedAt] 
     * @param {string} [orderFollowedCount] 
     * @param {string} [orderRelevance] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScanlationGroupApi
     */
    public async getSearchGroup(limit?: number, offset?: number, ids?: Array<string>, name?: string, focusedLanguage?: string, includes?: ReferenceExpansionScanlationGroup, orderName?: string, orderCreatedAt?: string, orderUpdatedAt?: string, orderFollowedCount?: string, orderRelevance?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ScanlationGroupList>> {
        return ScanlationGroupApiFp(this.configuration).getSearchGroup(limit, offset, ids, name, focusedLanguage, includes, orderName, orderCreatedAt, orderUpdatedAt, orderFollowedCount, orderRelevance, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Create Scanlation Group
     * @param {string} contentType 
     * @param {CreateScanlationGroup} [body] The size of the body is limited to 16KB.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScanlationGroupApi
     */
    public async postGroup(contentType: string, body?: CreateScanlationGroup, options?: AxiosRequestConfig) : Promise<AxiosResponse<ScanlationGroupResponse>> {
        return ScanlationGroupApiFp(this.configuration).postGroup(contentType, body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Follow Scanlation Group
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScanlationGroupApi
     */
    public async postGroupIdFollow(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Response>> {
        return ScanlationGroupApiFp(this.configuration).postGroupIdFollow(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Update Scanlation Group
     * @param {string} contentType 
     * @param {string} id Scanlation Group ID
     * @param {ScanlationGroupEdit} [body] The size of the body is limited to 8KB.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScanlationGroupApi
     */
    public async putGroupId(contentType: string, id: string, body?: ScanlationGroupEdit, options?: AxiosRequestConfig) : Promise<AxiosResponse<ScanlationGroupResponse>> {
        return ScanlationGroupApiFp(this.configuration).putGroupId(contentType, id, body, options).then((request) => request(this.axios, this.basePath));
    }
}
