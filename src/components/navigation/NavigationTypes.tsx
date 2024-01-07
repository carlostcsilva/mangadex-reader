import { MangaDisplay } from "../types/FormattedMangaType";

export type RootNavigationParamList = {
  Home: undefined;
  Manga: { manga: MangaDisplay };
};
