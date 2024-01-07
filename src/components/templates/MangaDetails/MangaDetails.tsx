import React from "react";
import MangaBanner from "../../organisms/MangaBanner/MangaBanner";
import { Route } from "@react-navigation/native";
import { MangaDisplay } from "../../types/FormattedMangaType";
import { View } from "react-native";
import { styles } from "./MangaDetails.style";

interface MangaDetailsProps {
  route: Route<"Manga", { manga: MangaDisplay }>;
}

const MangaDetails: React.FC<MangaDetailsProps> = ({ route }) => {
  const { manga } = route.params;

  return (
    <View style={styles.container}>
      <MangaBanner item={manga} />
    </View>
  );
};

export default MangaDetails;
