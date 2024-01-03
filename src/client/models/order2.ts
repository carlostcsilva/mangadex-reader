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
 * @interface Order2
 */
export interface Order2 {

    /**
     * @type {string}
     * @memberof Order2
     */
    name?: Order2NameEnum;

    /**
     * @type {string}
     * @memberof Order2
     */
    createdAt?: Order2CreatedAtEnum;

    /**
     * @type {string}
     * @memberof Order2
     */
    updatedAt?: Order2UpdatedAtEnum;

    /**
     * @type {string}
     * @memberof Order2
     */
    followedCount?: Order2FollowedCountEnum;

    /**
     * @type {string}
     * @memberof Order2
     */
    relevance?: Order2RelevanceEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum Order2NameEnum {
    Asc = 'asc',
    Desc = 'desc'
}
/**
 * @export
 * @enum {string}
 */
export enum Order2CreatedAtEnum {
    Asc = 'asc',
    Desc = 'desc'
}
/**
 * @export
 * @enum {string}
 */
export enum Order2UpdatedAtEnum {
    Asc = 'asc',
    Desc = 'desc'
}
/**
 * @export
 * @enum {string}
 */
export enum Order2FollowedCountEnum {
    Asc = 'asc',
    Desc = 'desc'
}
/**
 * @export
 * @enum {string}
 */
export enum Order2RelevanceEnum {
    Asc = 'asc',
    Desc = 'desc'
}
