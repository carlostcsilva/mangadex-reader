import { Text, StyleSheet, View, Dimensions, FlatList } from "react-native";
import { ChapterApiFactory, MangaApiFactory } from "./src/client/api";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { Manga, MangaList, Relationship } from "./src/client";
import FastImage from "react-native-fast-image";
import "react-native-url-polyfill/auto";
import { MangaListDisplay } from "./src/components/types/FormattedMangaType";
import Title from "./src/components/atoms/Title/Title";
import MangaCover from "./src/components/molecules/manga-cover/MangaCover";
import MangaScroller from "./src/components/organisms/MangaScroller/MangaScroller";

export default function App() {
  const chapterFactory = ChapterApiFactory();
  const mangaFactory = MangaApiFactory();

  const [newChaptersList, setNewChaptersList] =
    useState<AxiosResponse<MangaList>>();
  const [newMangaList, setNewMangaList] = useState<AxiosResponse<MangaList>>();
  const [formattedMangaList] = useState<MangaListDisplay[]>([]);
  const [numberOfCardsToDisplay, setNumberOfCardsToDisplay] = useState(3);

  useEffect(() => {
    const { getChapter } = chapterFactory;

    const chapterParams = {
      limit: 32,
      offset: 0,
      includes: ["manga"],
      translatedLanguage: ["en"],
      contentRating: ["safe"],
      orderReadableAt: "desc",
    };

    getChapter(chapterParams).then((res) => setNewChaptersList(res));
  }, []);

  useEffect(() => {
    if (!newChaptersList) return;

    const { getSearchManga } = mangaFactory;

    const mangaParams = {
      ids: [
        ...new Set(
          newChaptersList?.data?.data?.map((chapter) => {
            return chapter.relationships.find(
              (relationship) => relationship.type === "manga"
            )?.id;
          })
        ),
      ],
      limit: 100,
      contentRating: ["safe"],
      includes: ["cover_art"],
    };

    getSearchManga(mangaParams).then((res) => setNewMangaList(res));
  }, [newChaptersList]);

  useEffect(() => {
    newMangaList?.data?.data?.forEach((item: Manga) => {
      const coverArt = item.relationships.find(
        (relationship: Relationship) => relationship.type === "cover_art"
      );
      const imageSource = coverArt?.attributes?.fileName;
      const title =
        item.attributes.title["en"] ||
        item.attributes.title[item.attributes.originalLanguage];

      if (!formattedMangaList.some((manga) => manga.id === item.id)) {
        formattedMangaList.push({ ...item, imageSource, title });
      }
    });
  }, [newMangaList]);

  return (
    <View style={styles.container}>
      <MangaScroller formattedMangaList={formattedMangaList} numberOfCardsToDisplay={numberOfCardsToDisplay}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 40,
  },
});
