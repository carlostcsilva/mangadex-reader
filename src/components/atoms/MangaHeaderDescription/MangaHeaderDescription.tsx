import React from "react";
import { Text, ScrollView } from "react-native";
import { styles } from "./MangaHeaderDescription.style";

interface MangaHeaderDescription {
  description: string;
}

const MangaHeaderDescription: React.FC<MangaHeaderDescription> = ({
  description,
}) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.description}>{description}</Text>
    </ScrollView>
  );
};

export default MangaHeaderDescription;
