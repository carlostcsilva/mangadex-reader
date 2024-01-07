import React, { useCallback } from "react";
import { Dimensions, FlatList } from "react-native";
import { styles } from "./MangaScroller.style";
import { MangaListDisplay } from "../../types/FormattedMangaType";
import MangaCover from "../../molecules/manga-cover/MangaCover";

interface MangaListProps {
  formattedMangaList: MangaListDisplay[];
  numberOfCardsToDisplay?: number;
  searchForMoreManga?: () => void;
}

const MangaScroller: React.FC<MangaListProps> = ({
  formattedMangaList,
  numberOfCardsToDisplay = 3,
  searchForMoreManga,
}) => {
  /* This represents the padding of each card 
  * For each card, we have a 8px margin on each side
  * So we have to remove 16px from the total width for each card
  */
  const windowWidth =
    Dimensions.get("window").width - numberOfCardsToDisplay * 16;
  const width = windowWidth / numberOfCardsToDisplay;
  const height = width * 1.5;

  return (
    <FlatList
      data={formattedMangaList}
      numColumns={numberOfCardsToDisplay}
      key={numberOfCardsToDisplay}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <MangaCover
          item={item}
          numberOfCardsToDisplay={numberOfCardsToDisplay}
          width={width}
          height={height}
        />
      )}
      contentContainerStyle={styles.flatListContainer}
      onScrollBeginDrag={() => searchForMoreManga && searchForMoreManga()}
      onScrollEndDrag={() => searchForMoreManga && searchForMoreManga()}
    />
  );
};

export default MangaScroller;
