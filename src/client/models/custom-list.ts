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

import { CustomListAttributes } from './custom-list-attributes';
import { Relationship } from './relationship';
import {
    CustomListAttributes,Relationship,
} from ".";

/**
 * 
 *
 * @export
 * @interface CustomList
 */
export interface CustomList {

    /**
     * @type {string}
     * @memberof CustomList
     */
    id?: string;

    /**
     * @type {string}
     * @memberof CustomList
     */
    type?: CustomListTypeEnum;

    /**
     * @type {CustomListAttributes}
     * @memberof CustomList
     */
    attributes?: CustomListAttributes;

    /**
     * @type {Array<Relationship>}
     * @memberof CustomList
     */
    relationships?: Array<Relationship>;
}

/**
 * @export
 * @enum {string}
 */
export enum CustomListTypeEnum {
    CustomList = 'custom_list'
}

