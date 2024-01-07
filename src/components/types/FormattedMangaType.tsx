import { Manga } from "../../client";

export interface MangaDisplay extends Manga {
    imageSource: string;
    title: string;
}