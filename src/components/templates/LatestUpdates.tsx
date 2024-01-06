import React, { useEffect, useState } from "react";
import { View } from "react-native";
import MangaScroller from "../organisms/MangaScroller/MangaScroller";
import { styles } from "./LatestUpdates.style";
import { AxiosResponse } from "axios";
import { MangaListDisplay } from "../types/FormattedMangaType";
import { MangaApiFactory } from "../../client/apis/manga-api";
import { ChapterApiFactory } from "../../client/apis/chapter-api";
import { MangaList } from "../../client/models/manga-list";
import { Relationship } from "../../client/models/relationship";
import { Manga } from "../../client/models/manga";

const LatestUpdates: React.FC = () => {
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
      <MangaScroller
        formattedMangaList={formattedMangaList}
        numberOfCardsToDisplay={numberOfCardsToDisplay}
      />
    </View>
  );
};

export default LatestUpdates;
