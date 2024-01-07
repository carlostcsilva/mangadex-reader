import React from "react";
import { View, Text } from "react-native";
import { styles } from "./MangaHeader.style";
import { MangaDisplay } from "../../types/FormattedMangaType";
import MangaCover from "../MangaCover/MangaCover";
import MangaInfo from "../MangaInfo/MangaInfo";

interface MangaHeaderProps {
  item: MangaDisplay;
  height: number;
}

const MangaHeader: React.FC<MangaHeaderProps> = ({ item, height }) => {
  /*
   * We want to keep a 16/9 ratio for the image
   * So we have to compute the width based on the height
   */
  const width = height / (16 / 9);
  return (
    <View style={{ height }}>
      <MangaCover item={item} width={width} height={height} hideTitle={true} />
      <MangaInfo title={item.title} description={""} containerHeight={height} />
    </View>
  );
};

export default MangaHeader;
