import React from "react";
import { View, Text } from "react-native";
import { styles } from "./MangaBanner.style";
import { MangaDisplay } from "../../types/FormattedMangaType";
import MangaHeader from "../../molecules/MangaHeader/MangaHeader";

interface MangaBannerProps {
  item: MangaDisplay;
}

const MangaBanner: React.FC<MangaBannerProps> = ({ item }) => {
  return (
    <View>
      <MangaHeader item={item} height={200} />
    </View>
  );
};

export default MangaBanner;
