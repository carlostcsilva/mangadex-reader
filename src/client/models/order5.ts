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

import {
    
} from ".";

/**
 * 
 *
 * @export
 * @interface Order5
 */
export interface Order5 {

    /**
     * @type {string}
     * @memberof Order5
     */
    createdAt?: Order5CreatedAtEnum;

    /**
     * @type {string}
     * @memberof Order5
     */
    updatedAt?: Order5UpdatedAtEnum;

    /**
     * @type {string}
     * @memberof Order5
     */
    publishAt?: Order5PublishAtEnum;

    /**
     * @type {string}
     * @memberof Order5
     */
    readableAt?: Order5ReadableAtEnum;

    /**
     * @type {string}
     * @memberof Order5
     */
    volume?: Order5VolumeEnum;

    /**
     * @type {string}
     * @memberof Order5
     */
    chapter?: Order5ChapterEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum Order5CreatedAtEnum {
    Asc = 'asc',
    Desc = 'desc'
}
/**
 * @export
 * @enum {string}
 */
export enum Order5UpdatedAtEnum {
    Asc = 'asc',
    Desc = 'desc'
}
/**
 * @export
 * @enum {string}
 */
export enum Order5PublishAtEnum {
    Asc = 'asc',
    Desc = 'desc'
}
/**
 * @export
 * @enum {string}
 */
export enum Order5ReadableAtEnum {
    Asc = 'asc',
    Desc = 'desc'
}
/**
 * @export
 * @enum {string}
 */
export enum Order5VolumeEnum {
    Asc = 'asc',
    Desc = 'desc'
}
/**
 * @export
 * @enum {string}
 */
export enum Order5ChapterEnum {
    Asc = 'asc',
    Desc = 'desc'
}

