import React from "react";
import { Dimensions, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./MangaScroller.style";
import { MangaDisplay } from "../../types/FormattedMangaType";
import MangaCover from "../../molecules/MangaCover/MangaCover";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootNavigationParamList } from "../../navigation/NavigationTypes";

interface MangaScrollerProps {
  formattedMangaList: MangaDisplay[];
  numberOfCardsToDisplay?: number;
  searchForMoreManga?: () => void;
}

const MangaScroller: React.FC<MangaScrollerProps> = ({
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
  const navigation =
    useNavigation<StackNavigationProp<RootNavigationParamList>>();

  const openManga = (item: MangaDisplay) => {
    navigation.navigate("Manga", { manga: item });
  };

  return (
    <FlatList
      data={formattedMangaList}
      numColumns={numberOfCardsToDisplay}
      key={numberOfCardsToDisplay}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => openManga(item)}>
          <MangaCover
            item={item}
            width={width}
            height={height}
          />
        </TouchableOpacity>
      )}
      contentContainerStyle={styles.flatListContainer}
      onScrollBeginDrag={() => searchForMoreManga && searchForMoreManga()}
      onScrollEndDrag={() => searchForMoreManga && searchForMoreManga()}
    />
  );
};

export default MangaScroller;
