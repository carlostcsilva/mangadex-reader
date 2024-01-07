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
    <View style={styles.container}>
      <MangaHeader item={item} height={300} />
    </View>
  );
};

export default MangaBanner;
