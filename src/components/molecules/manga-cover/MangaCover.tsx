import React from "react";
import { Dimensions, Text, View } from "react-native";
import { styles } from "./MangaCover.style";
import FastImage from "react-native-fast-image";
import Title from "../../atoms/Title/Title";
import { MangaListDisplay } from "../../types/FormattedMangaType";
import { COVER_URL } from "../../constants/urls";

interface MangaCoverProps {
  item: MangaListDisplay;
  width: number;
  height: number
  numberOfCardsToDisplay?: number;
}

const MangaCover: React.FC<MangaCoverProps> = ({ item, width, height }) => {

  return (
    <View style={[styles.imageContainer, { width, height }]}>
      <FastImage
        style={[{ width, height }]}
        source={{
          uri: `${COVER_URL}/${item.id}/${item.imageSource}`,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Title text={item.title} />
    </View>
  );
};

export default MangaCover;
