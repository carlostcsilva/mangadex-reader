import React, { useEffect, useState } from "react";
import { View } from "react-native";
import MangaScroller from "../../organisms/MangaScroller/MangaScroller";
import { styles } from "./LatestUpdates.style";
import { AxiosResponse } from "axios";
import { MangaDisplay } from "../../types/FormattedMangaType";
import { MangaApiFactory } from "../../../client/apis/manga-api";
import { ChapterApiFactory } from "../../../client/apis/chapter-api";
import { MangaList } from "../../../client/models/manga-list";
import { Relationship } from "../../../client/models/relationship";
import { Manga } from "../../../client/models/manga";

const LatestUpdates: React.FC = () => {
  const chapterFactory = ChapterApiFactory();
  const mangaFactory = MangaApiFactory();

  const [currentOffset, setCurrentOffset] = useState<number>(0);
  const [currentlyUpdating, setCurrentlyUpdating] = useState<boolean>(false);
  const [newChaptersList, setNewChaptersList] =
    useState<AxiosResponse<MangaList>>();
  const [newMangaList, setNewMangaList] = useState<AxiosResponse<MangaList>>();
  const [formattedMangaList, setFormattedMangaList] = useState<MangaDisplay[]>(
    []
  );
  const [numberOfCardsToDisplay, setNumberOfCardsToDisplay] = useState(3);

  const getLatestChapters = () => {
    if (currentlyUpdating) return;
    setCurrentlyUpdating(true);
    const { getChapter } = chapterFactory;

    const chapterParams = {
      limit: 50,
      offset: currentOffset,
      includes: ["manga"],
      translatedLanguage: ["en"],
      contentRating: ["safe"],
      orderReadableAt: "desc",
    };

    getChapter(chapterParams).then((res) => {
      setNewChaptersList(res);
      setCurrentlyUpdating(false);
    });
  };

  useEffect(() => {
    getLatestChapters();
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
    const updateList = [...formattedMangaList];

    newMangaList?.data?.data?.forEach((item: Manga) => {
      const coverArt = item.relationships.find(
        (relationship: Relationship) => relationship.type === "cover_art"
      );
      const imageSource = coverArt?.attributes?.fileName;
      const title =
        item.attributes.title["en"] ||
        item.attributes.title[item.attributes.originalLanguage];
      const description =
        item.attributes.description["en"] ||
        item.attributes.description[item.attributes.originalLanguage];

      if (!formattedMangaList.some((manga) => manga.id === item.id)) {
        updateList.push({ ...item, imageSource, title, description });
      }
    });

    const howManyNewChapters = updateList.length - formattedMangaList.length;
    const howFarFromOffset = 50 - howManyNewChapters;
    setCurrentOffset(currentOffset + howFarFromOffset);
    setFormattedMangaList(updateList);
  }, [newMangaList]);

  return (
    <View style={styles.container}>
      <MangaScroller
        formattedMangaList={formattedMangaList}
        numberOfCardsToDisplay={numberOfCardsToDisplay}
        searchForMoreManga={getLatestChapters}
      />
    </View>
  );
};

export default LatestUpdates;
