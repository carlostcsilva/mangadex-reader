import React from "react";
import { View, Text } from "react-native";
import { styles } from "./MangaInfo.style";
import { ScrollView } from "react-native-gesture-handler";
import MangaHeaderTitle from "../../atoms/MangaHeaderTitle/MangaHeaderTitle";
import MangaHeaderDescription from "../../atoms/MangaHeaderDescription/MangaHeaderDescription";

interface MangaInfoProps {
  title: string;
  description: string;
  containerHeight: number;
}

const MangaInfo: React.FC<MangaInfoProps> = ({
  title,
  description,
  containerHeight,
}) => {
  return (
    <View style={[styles.container, { height: containerHeight }]}>
      <MangaHeaderTitle title={title} />
      <MangaHeaderDescription description={description} />
    </View>
  );
};

export default MangaInfo;
