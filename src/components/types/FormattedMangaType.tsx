import { Manga } from "../../client";

export interface MangaListDisplay extends Manga {
    imageSource: string;
    title: string;
}