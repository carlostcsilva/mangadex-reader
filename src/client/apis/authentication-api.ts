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
import { CheckResponse } from '../models';
import { ErrorResponse } from '../models';
import { Login } from '../models';
import { LoginResponse } from '../models';
import { LogoutResponse } from '../models';
import { RefreshResponse } from '../models';
import { RefreshToken } from '../models';
/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * The returned list of permissions is computed depending on the generic role permissions that the token user has, their personal overrides, and the OpenID scopes of the token (we do not offer granular token permissions yet) 
         * @summary Check the set of permissions associated with the current token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAuthCheck: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/check`;
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
         * @summary Login
         * @param {string} contentType 
         * @param {Login} [body] The size of the body is limited to 2KB.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postAuthLogin: async (contentType: string, body?: Login, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contentType' is not null or undefined
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling postAuthLogin.');
            }
            const localVarPath = `/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
         * @summary Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postAuthLogout: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/auth/logout`;
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
         * @summary Refresh token
         * @param {string} contentType 
         * @param {RefreshToken} [body] The size of the body is limited to 2KB.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postAuthRefresh: async (contentType: string, body?: RefreshToken, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'contentType' is not null or undefined
            if (contentType === null || contentType === undefined) {
                throw new RequiredError('contentType','Required parameter contentType was null or undefined when calling postAuthRefresh.');
            }
            const localVarPath = `/auth/refresh`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

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
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * The returned list of permissions is computed depending on the generic role permissions that the token user has, their personal overrides, and the OpenID scopes of the token (we do not offer granular token permissions yet) 
         * @summary Check the set of permissions associated with the current token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAuthCheck(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CheckResponse>>> {
            const localVarAxiosArgs = await AuthenticationApiAxiosParamCreator(configuration).getAuthCheck(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Login
         * @param {string} contentType 
         * @param {Login} [body] The size of the body is limited to 2KB.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postAuthLogin(contentType: string, body?: Login, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<LoginResponse>>> {
            const localVarAxiosArgs = await AuthenticationApiAxiosParamCreator(configuration).postAuthLogin(contentType, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postAuthLogout(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<LogoutResponse>>> {
            const localVarAxiosArgs = await AuthenticationApiAxiosParamCreator(configuration).postAuthLogout(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Refresh token
         * @param {string} contentType 
         * @param {RefreshToken} [body] The size of the body is limited to 2KB.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postAuthRefresh(contentType: string, body?: RefreshToken, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<RefreshResponse>>> {
            const localVarAxiosArgs = await AuthenticationApiAxiosParamCreator(configuration).postAuthRefresh(contentType, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * The returned list of permissions is computed depending on the generic role permissions that the token user has, their personal overrides, and the OpenID scopes of the token (we do not offer granular token permissions yet) 
         * @summary Check the set of permissions associated with the current token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAuthCheck(options?: AxiosRequestConfig): Promise<AxiosResponse<CheckResponse>> {
            return AuthenticationApiFp(configuration).getAuthCheck(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Login
         * @param {string} contentType 
         * @param {Login} [body] The size of the body is limited to 2KB.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postAuthLogin(contentType: string, body?: Login, options?: AxiosRequestConfig): Promise<AxiosResponse<LoginResponse>> {
            return AuthenticationApiFp(configuration).postAuthLogin(contentType, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Logout
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postAuthLogout(options?: AxiosRequestConfig): Promise<AxiosResponse<LogoutResponse>> {
            return AuthenticationApiFp(configuration).postAuthLogout(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Refresh token
         * @param {string} contentType 
         * @param {RefreshToken} [body] The size of the body is limited to 2KB.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postAuthRefresh(contentType: string, body?: RefreshToken, options?: AxiosRequestConfig): Promise<AxiosResponse<RefreshResponse>> {
            return AuthenticationApiFp(configuration).postAuthRefresh(contentType, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI {
    /**
     * The returned list of permissions is computed depending on the generic role permissions that the token user has, their personal overrides, and the OpenID scopes of the token (we do not offer granular token permissions yet) 
     * @summary Check the set of permissions associated with the current token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public async getAuthCheck(options?: AxiosRequestConfig) : Promise<AxiosResponse<CheckResponse>> {
        return AuthenticationApiFp(this.configuration).getAuthCheck(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Login
     * @param {string} contentType 
     * @param {Login} [body] The size of the body is limited to 2KB.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public async postAuthLogin(contentType: string, body?: Login, options?: AxiosRequestConfig) : Promise<AxiosResponse<LoginResponse>> {
        return AuthenticationApiFp(this.configuration).postAuthLogin(contentType, body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Logout
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public async postAuthLogout(options?: AxiosRequestConfig) : Promise<AxiosResponse<LogoutResponse>> {
        return AuthenticationApiFp(this.configuration).postAuthLogout(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Refresh token
     * @param {string} contentType 
     * @param {RefreshToken} [body] The size of the body is limited to 2KB.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public async postAuthRefresh(contentType: string, body?: RefreshToken, options?: AxiosRequestConfig) : Promise<AxiosResponse<RefreshResponse>> {
        return AuthenticationApiFp(this.configuration).postAuthRefresh(contentType, body, options).then((request) => request(this.axios, this.basePath));
    }
}
