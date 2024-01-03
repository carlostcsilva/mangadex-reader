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

import globalAxios, {
  AxiosResponse,
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
import { Chapter } from "../models";
import { ChapterEdit } from "../models";
import { ChapterList } from "../models";
import { ChapterResponse } from "../models";
import { ErrorResponse } from "../models";
import { ReferenceExpansionChapter } from "../models";
import { Response } from "../models";
import { Uploader } from "../models";
import { Volume } from "../models";
/**
 * ChapterApi - axios parameter creator
 * @export
 */
export const ChapterApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Delete Chapter
     * @param {string} id Chapter ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteChapterId: async (
      id: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          "id",
          "Required parameter id was null or undefined when calling deleteChapterId."
        );
      }
      const localVarPath = `/chapter/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: "DELETE",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication Bearer required
      // http bearer authentication required
      if (configuration && configuration.accessToken) {
        const accessToken =
          typeof configuration.accessToken === "function"
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
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     * Chapter list. If you want the Chapters of a given Manga, please check the feed endpoints.
     * @summary Chapter list
     * @param {number} [limit]
     * @param {number} [offset]
     * @param {Array<string>} [ids] Chapter ids (limited to 100 per request)
     * @param {string} [title]
     * @param {Array<string>} [groups]
     * @param {Uploader} [uploader]
     * @param {string} [manga]
     * @param {Volume} [volume]
     * @param {Chapter} [chapter]
     * @param {Array<string>} [translatedLanguage]
     * @param {Array<string>} [originalLanguage]
     * @param {Array<string>} [excludedOriginalLanguage]
     * @param {Array<string>} [contentRating]
     * @param {Array<string>} [excludedGroups]
     * @param {Array<string>} [excludedUploaders]
     * @param {string} [includeFutureUpdates]
     * @param {number} [includeEmptyPages]
     * @param {number} [includeFuturePublishAt]
     * @param {number} [includeExternalUrl]
     * @param {string} [createdAtSince]
     * @param {string} [updatedAtSince]
     * @param {string} [publishAtSince]
     * @param {string} [orderCreatedAt]
     * @param {string} [orderUpdatedAt]
     * @param {string} [orderPublishAt]
     * @param {string} [orderReadableAt]
     * @param {string} [orderVolume]
     * @param {string} [orderChapter]
     * @param {Array<string>} [includes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChapter: async (
      limit?: number,
      offset?: number,
      ids?: Array<string>,
      title?: string,
      groups?: Array<string>,
      uploader?: Uploader,
      manga?: string,
      volume?: Volume,
      chapter?: Chapter,
      translatedLanguage?: Array<string>,
      originalLanguage?: Array<string>,
      excludedOriginalLanguage?: Array<string>,
      contentRating?: Array<string>,
      excludedGroups?: Array<string>,
      excludedUploaders?: Array<string>,
      includeFutureUpdates?: string,
      includeEmptyPages?: number,
      includeFuturePublishAt?: number,
      includeExternalUrl?: number,
      createdAtSince?: string,
      updatedAtSince?: string,
      publishAtSince?: string,
      orderCreatedAt?: string,
      orderUpdatedAt?: string,
      orderPublishAt?: string,
      orderReadableAt?: string,
      orderVolume?: string,
      orderChapter?: string,
      includes?: Array<string>,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/chapter`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      if (limit !== undefined) {
        localVarQueryParameter["limit"] = limit;
      }

      if (offset !== undefined) {
        localVarQueryParameter["offset"] = offset;
      }

      if (ids) {
        localVarQueryParameter["ids[]"] = ids;
      }

      if (title !== undefined) {
        localVarQueryParameter["title"] = title;
      }

      if (groups) {
        localVarQueryParameter["groups[]"] = groups;
      }

      if (uploader !== undefined) {
        localVarQueryParameter["uploader"] = uploader;
      }

      if (manga !== undefined) {
        localVarQueryParameter["manga"] = manga;
      }

      if (volume !== undefined) {
        localVarQueryParameter["volume[]"] = volume;
      }

      if (chapter !== undefined) {
        localVarQueryParameter["chapter"] = chapter;
      }

      if (translatedLanguage) {
        localVarQueryParameter["translatedLanguage[]"] = translatedLanguage;
      }

      if (originalLanguage) {
        localVarQueryParameter["originalLanguage[]"] = originalLanguage;
      }

      if (excludedOriginalLanguage) {
        localVarQueryParameter["excludedOriginalLanguage[]"] =
          excludedOriginalLanguage;
      }

      if (contentRating) {
        localVarQueryParameter["contentRating[]"] = contentRating;
      }

      if (excludedGroups) {
        localVarQueryParameter["excludedGroups[]"] = excludedGroups;
      }

      if (excludedUploaders) {
        localVarQueryParameter["excludedUploaders[]"] = excludedUploaders;
      }

      if (includeFutureUpdates !== undefined) {
        localVarQueryParameter["includeFutureUpdates"] = includeFutureUpdates;
      }

      if (includeEmptyPages !== undefined) {
        localVarQueryParameter["includeEmptyPages"] = includeEmptyPages;
      }

      if (includeFuturePublishAt !== undefined) {
        localVarQueryParameter["includeFuturePublishAt"] =
          includeFuturePublishAt;
      }

      if (includeExternalUrl !== undefined) {
        localVarQueryParameter["includeExternalUrl"] = includeExternalUrl;
      }

      if (createdAtSince !== undefined) {
        localVarQueryParameter["createdAtSince"] = createdAtSince;
      }

      if (updatedAtSince !== undefined) {
        localVarQueryParameter["updatedAtSince"] = updatedAtSince;
      }

      if (publishAtSince !== undefined) {
        localVarQueryParameter["publishAtSince"] = publishAtSince;
      }

      if (orderCreatedAt !== undefined) {
        localVarQueryParameter["order[createdAt]"] = orderCreatedAt;
      }

      if (orderUpdatedAt !== undefined) {
        localVarQueryParameter["order[updatedAt]"] = orderUpdatedAt;
      }

      if (orderPublishAt !== undefined) {
        localVarQueryParameter["order[publishAt]"] = orderPublishAt;
      }

      if (orderReadableAt !== undefined) {
        localVarQueryParameter["order[readableAt]"] = orderReadableAt;
      }

      if (orderVolume !== undefined) {
        localVarQueryParameter["order[volume]"] = orderVolume;
      }

      if (orderChapter !== undefined) {
        localVarQueryParameter["order[chapter]"] = orderChapter;
      }

      if (includes) {
        localVarQueryParameter["includes"] = includes;
      }

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.params) {
        query.set(key, options.params[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Get Chapter
     * @param {string} id Chapter ID
     * @param {ReferenceExpansionChapter} [includes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getChapterId: async (
      id: string,
      includes?: ReferenceExpansionChapter,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          "id",
          "Required parameter id was null or undefined when calling getChapterId."
        );
      }
      const localVarPath = `/chapter/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      if (includes !== undefined) {
        localVarQueryParameter["includes[]"] = includes;
      }

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.params) {
        query.set(key, options.params[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
    /**
     *
     * @summary Update Chapter
     * @param {string} contentType
     * @param {string} id Chapter ID
     * @param {ChapterEdit} [body] The size of the body is limited to 32KB.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    putChapterId: async (
      contentType: string,
      id: string,
      body?: ChapterEdit,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'contentType' is not null or undefined
      if (contentType === null || contentType === undefined) {
        throw new RequiredError(
          "contentType",
          "Required parameter contentType was null or undefined when calling putChapterId."
        );
      }
      // verify required parameter 'id' is not null or undefined
      if (id === null || id === undefined) {
        throw new RequiredError(
          "id",
          "Required parameter id was null or undefined when calling putChapterId."
        );
      }
      const localVarPath = `/chapter/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, "https://example.com");
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions: AxiosRequestConfig = {
        method: "PUT",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication Bearer required
      // http bearer authentication required
      if (configuration && configuration.accessToken) {
        const accessToken =
          typeof configuration.accessToken === "function"
            ? await configuration.accessToken()
            : await configuration.accessToken;
        localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
      }

      if (contentType !== undefined && contentType !== null) {
        localVarHeaderParameter["Content-Type"] = String(contentType);
      }

      localVarHeaderParameter["Content-Type"] = "application/json";

      const query = new URLSearchParams(localVarUrlObj.search);
      for (const key in localVarQueryParameter) {
        query.set(key, localVarQueryParameter[key]);
      }
      for (const key in options.params) {
        query.set(key, options.params[key]);
      }
      localVarUrlObj.search = new URLSearchParams(query).toString();
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      const needsSerialization =
        typeof body !== "string" ||
        localVarRequestOptions.headers["Content-Type"] === "application/json";
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(body !== undefined ? body : {})
        : body || "";

      return {
        url:
          localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * ChapterApi - functional programming interface
 * @export
 */
export const ChapterApiFp = function (configuration?: Configuration) {
  return {
    /**
     *
     * @summary Delete Chapter
     * @param {string} id Chapter ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteChapterId(
      id: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => Promise<AxiosResponse<Response>>
    > {
      const localVarAxiosArgs = await ChapterApiAxiosParamCreator(
        configuration
      ).deleteChapterId(id, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     * Chapter list. If you want the Chapters of a given Manga, please check the feed endpoints.
     * @summary Chapter list
     * @param {number} [limit]
     * @param {number} [offset]
     * @param {Array<string>} [ids] Chapter ids (limited to 100 per request)
     * @param {string} [title]
     * @param {Array<string>} [groups]
     * @param {Uploader} [uploader]
     * @param {string} [manga]
     * @param {Volume} [volume]
     * @param {Chapter} [chapter]
     * @param {Array<string>} [translatedLanguage]
     * @param {Array<string>} [originalLanguage]
     * @param {Array<string>} [excludedOriginalLanguage]
     * @param {Array<string>} [contentRating]
     * @param {Array<string>} [excludedGroups]
     * @param {Array<string>} [excludedUploaders]
     * @param {string} [includeFutureUpdates]
     * @param {number} [includeEmptyPages]
     * @param {number} [includeFuturePublishAt]
     * @param {number} [includeExternalUrl]
     * @param {string} [createdAtSince]
     * @param {string} [updatedAtSince]
     * @param {string} [publishAtSince]
     * @param {string} [orderCreatedAt]
     * @param {string} [orderUpdatedAt]
     * @param {string} [orderPublishAt]
     * @param {string} [orderReadableAt]
     * @param {string} [orderVolume]
     * @param {string} [orderChapter]
     * @param {Array<string>} [includes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getChapter(
      limit?: number,
      offset?: number,
      ids?: Array<string>,
      title?: string,
      groups?: Array<string>,
      uploader?: Uploader,
      manga?: string,
      volume?: Volume,
      chapter?: Chapter,
      translatedLanguage?: Array<string>,
      originalLanguage?: Array<string>,
      excludedOriginalLanguage?: Array<string>,
      contentRating?: Array<string>,
      excludedGroups?: Array<string>,
      excludedUploaders?: Array<string>,
      includeFutureUpdates?: string,
      includeEmptyPages?: number,
      includeFuturePublishAt?: number,
      includeExternalUrl?: number,
      createdAtSince?: string,
      updatedAtSince?: string,
      publishAtSince?: string,
      orderCreatedAt?: string,
      orderUpdatedAt?: string,
      orderPublishAt?: string,
      orderReadableAt?: string,
      orderVolume?: string,
      orderChapter?: string,
      includes?: Array<string>,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => Promise<AxiosResponse<ChapterList>>
    > {
      const localVarAxiosArgs = await ChapterApiAxiosParamCreator(
        configuration
      ).getChapter(
        limit,
        offset,
        ids,
        title,
        groups,
        uploader,
        manga,
        volume,
        chapter,
        translatedLanguage,
        originalLanguage,
        excludedOriginalLanguage,
        contentRating,
        excludedGroups,
        excludedUploaders,
        includeFutureUpdates,
        includeEmptyPages,
        includeFuturePublishAt,
        includeExternalUrl,
        createdAtSince,
        updatedAtSince,
        publishAtSince,
        orderCreatedAt,
        orderUpdatedAt,
        orderPublishAt,
        orderReadableAt,
        orderVolume,
        orderChapter,
        includes,
        options
      );
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     *
     * @summary Get Chapter
     * @param {string} id Chapter ID
     * @param {ReferenceExpansionChapter} [includes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getChapterId(
      id: string,
      includes?: ReferenceExpansionChapter,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => Promise<AxiosResponse<ChapterResponse>>
    > {
      const localVarAxiosArgs = await ChapterApiAxiosParamCreator(
        configuration
      ).getChapterId(id, includes, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     *
     * @summary Update Chapter
     * @param {string} contentType
     * @param {string} id Chapter ID
     * @param {ChapterEdit} [body] The size of the body is limited to 32KB.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async putChapterId(
      contentType: string,
      id: string,
      body?: ChapterEdit,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => Promise<AxiosResponse<ChapterResponse>>
    > {
      const localVarAxiosArgs = await ChapterApiAxiosParamCreator(
        configuration
      ).putChapterId(contentType, id, body, options);
      return (
        axios: AxiosInstance = globalAxios,
        basePath: string = BASE_PATH
      ) => {
        const axiosRequestArgs: AxiosRequestConfig = {
          ...localVarAxiosArgs.options,
          url: basePath + localVarAxiosArgs.url,
        };
        return axios.request(axiosRequestArgs);
      };
    },
  };
};

/**
 * ChapterApi - factory interface
 * @export
 */
export const ChapterApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  return {
    /**
     *
     * @summary Delete Chapter
     * @param {string} id Chapter ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteChapterId(
      id: string,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<Response>> {
      return ChapterApiFp(configuration)
        .deleteChapterId(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Chapter list. If you want the Chapters of a given Manga, please check the feed endpoints.
     * @summary Chapter list
     * @param {number} [limit]
     * @param {number} [offset]
     * @param {Array<string>} [ids] Chapter ids (limited to 100 per request)
     * @param {string} [title]
     * @param {Array<string>} [groups]
     * @param {Uploader} [uploader]
     * @param {string} [manga]
     * @param {Volume} [volume]
     * @param {Chapter} [chapter]
     * @param {Array<string>} [translatedLanguage]
     * @param {Array<string>} [originalLanguage]
     * @param {Array<string>} [excludedOriginalLanguage]
     * @param {Array<string>} [contentRating]
     * @param {Array<string>} [excludedGroups]
     * @param {Array<string>} [excludedUploaders]
     * @param {string} [includeFutureUpdates]
     * @param {number} [includeEmptyPages]
     * @param {number} [includeFuturePublishAt]
     * @param {number} [includeExternalUrl]
     * @param {string} [createdAtSince]
     * @param {string} [updatedAtSince]
     * @param {string} [publishAtSince]
     * @param {string} [orderCreatedAt]
     * @param {string} [orderUpdatedAt]
     * @param {string} [orderPublishAt]
     * @param {string} [orderReadableAt]
     * @param {string} [orderVolume]
     * @param {string} [orderChapter]
     * @param {Array<string>} [includes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getChapter(
      args : {
        limit?: number,
        offset?: number,
        ids?: Array<string>,
        title?: string,
        groups?: Array<string>,
        uploader?: Uploader,
        manga?: string,
        volume?: Volume,
        chapter?: Chapter,
        translatedLanguage?: Array<string>,
        originalLanguage?: Array<string>,
        excludedOriginalLanguage?: Array<string>,
        contentRating?: Array<string>,
        excludedGroups?: Array<string>,
        excludedUploaders?: Array<string>,
        includeFutureUpdates?: string,
        includeEmptyPages?: number,
        includeFuturePublishAt?: number,
        includeExternalUrl?: number,
        createdAtSince?: string,
        updatedAtSince?: string,
        publishAtSince?: string,
        orderCreatedAt?: string,
        orderUpdatedAt?: string,
        orderPublishAt?: string,
        orderReadableAt?: string,
        orderVolume?: string,
        orderChapter?: string,
        includes?: Array<string>,
        options?: AxiosRequestConfig,
      }
    ): Promise<AxiosResponse<ChapterList>> {
      return ChapterApiFp(configuration)
        .getChapter(
          args.limit,
          args.offset,
          args.ids,
          args.title,
          args.groups,
          args.uploader,
          args.manga,
          args.volume,
          args.chapter,
          args.translatedLanguage,
          args.originalLanguage,
          args.excludedOriginalLanguage,
          args.contentRating,
          args.excludedGroups,
          args.excludedUploaders,
          args.includeFutureUpdates,
          args.includeEmptyPages,
          args.includeFuturePublishAt,
          args.includeExternalUrl,
          args.createdAtSince,
          args.updatedAtSince,
          args.publishAtSince,
          args.orderCreatedAt,
          args.orderUpdatedAt,
          args.orderPublishAt,
          args.orderReadableAt,
          args.orderVolume,
          args.orderChapter,
          args.includes,
          args.options
        )
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get Chapter
     * @param {string} id Chapter ID
     * @param {ReferenceExpansionChapter} [includes]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getChapterId(
      id: string,
      includes?: ReferenceExpansionChapter,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<ChapterResponse>> {
      return ChapterApiFp(configuration)
        .getChapterId(id, includes, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Update Chapter
     * @param {string} contentType
     * @param {string} id Chapter ID
     * @param {ChapterEdit} [body] The size of the body is limited to 32KB.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async putChapterId(
      contentType: string,
      id: string,
      body?: ChapterEdit,
      options?: AxiosRequestConfig
    ): Promise<AxiosResponse<ChapterResponse>> {
      return ChapterApiFp(configuration)
        .putChapterId(contentType, id, body, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * ChapterApi - object-oriented interface
 * @export
 * @class ChapterApi
 * @extends {BaseAPI}
 */
export class ChapterApi extends BaseAPI {
  /**
   *
   * @summary Delete Chapter
   * @param {string} id Chapter ID
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChapterApi
   */
  public async deleteChapterId(
    id: string,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<Response>> {
    return ChapterApiFp(this.configuration)
      .deleteChapterId(id, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   * Chapter list. If you want the Chapters of a given Manga, please check the feed endpoints.
   * @summary Chapter list
   * @param {number} [limit]
   * @param {number} [offset]
   * @param {Array<string>} [ids] Chapter ids (limited to 100 per request)
   * @param {string} [title]
   * @param {Array<string>} [groups]
   * @param {Uploader} [uploader]
   * @param {string} [manga]
   * @param {Volume} [volume]
   * @param {Chapter} [chapter]
   * @param {Array<string>} [translatedLanguage]
   * @param {Array<string>} [originalLanguage]
   * @param {Array<string>} [excludedOriginalLanguage]
   * @param {Array<string>} [contentRating]
   * @param {Array<string>} [excludedGroups]
   * @param {Array<string>} [excludedUploaders]
   * @param {string} [includeFutureUpdates]
   * @param {number} [includeEmptyPages]
   * @param {number} [includeFuturePublishAt]
   * @param {number} [includeExternalUrl]
   * @param {string} [createdAtSince]
   * @param {string} [updatedAtSince]
   * @param {string} [publishAtSince]
   * @param {string} [orderCreatedAt]
   * @param {string} [orderUpdatedAt]
   * @param {string} [orderPublishAt]
   * @param {string} [orderReadableAt]
   * @param {string} [orderVolume]
   * @param {string} [orderChapter]
   * @param {Array<string>} [includes]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChapterApi
   */
  public async getChapter(
    limit?: number,
    offset?: number,
    ids?: Array<string>,
    title?: string,
    groups?: Array<string>,
    uploader?: Uploader,
    manga?: string,
    volume?: Volume,
    chapter?: Chapter,
    translatedLanguage?: Array<string>,
    originalLanguage?: Array<string>,
    excludedOriginalLanguage?: Array<string>,
    contentRating?: Array<string>,
    excludedGroups?: Array<string>,
    excludedUploaders?: Array<string>,
    includeFutureUpdates?: string,
    includeEmptyPages?: number,
    includeFuturePublishAt?: number,
    includeExternalUrl?: number,
    createdAtSince?: string,
    updatedAtSince?: string,
    publishAtSince?: string,
    orderCreatedAt?: string,
    orderUpdatedAt?: string,
    orderPublishAt?: string,
    orderReadableAt?: string,
    orderVolume?: string,
    orderChapter?: string,
    includes?: Array<string>,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<ChapterList>> {
    return ChapterApiFp(this.configuration)
      .getChapter(
        limit,
        offset,
        ids,
        title,
        groups,
        uploader,
        manga,
        volume,
        chapter,
        translatedLanguage,
        originalLanguage,
        excludedOriginalLanguage,
        contentRating,
        excludedGroups,
        excludedUploaders,
        includeFutureUpdates,
        includeEmptyPages,
        includeFuturePublishAt,
        includeExternalUrl,
        createdAtSince,
        updatedAtSince,
        publishAtSince,
        orderCreatedAt,
        orderUpdatedAt,
        orderPublishAt,
        orderReadableAt,
        orderVolume,
        orderChapter,
        includes,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Get Chapter
   * @param {string} id Chapter ID
   * @param {ReferenceExpansionChapter} [includes]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChapterApi
   */
  public async getChapterId(
    id: string,
    includes?: ReferenceExpansionChapter,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<ChapterResponse>> {
    return ChapterApiFp(this.configuration)
      .getChapterId(id, includes, options)
      .then((request) => request(this.axios, this.basePath));
  }
  /**
   *
   * @summary Update Chapter
   * @param {string} contentType
   * @param {string} id Chapter ID
   * @param {ChapterEdit} [body] The size of the body is limited to 32KB.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof ChapterApi
   */
  public async putChapterId(
    contentType: string,
    id: string,
    body?: ChapterEdit,
    options?: AxiosRequestConfig
  ): Promise<AxiosResponse<ChapterResponse>> {
    return ChapterApiFp(this.configuration)
      .putChapterId(contentType, id, body, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
