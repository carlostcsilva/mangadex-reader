import React from "react";
import { View, Text } from "react-native";
import { styles } from "./MangaHeaderTitle.style";

interface MangaHeaderTitle {
  title: string;
}

const MangaHeaderTitle: React.FC<MangaHeaderTitle> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </View>
  );
};

export default MangaHeaderTitle;
