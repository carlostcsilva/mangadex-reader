import React from "react";
import { View, Text } from "react-native";
import { styles } from "./MangaInfo.style";

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
  const fontSizeTitle = 18;
  const fontSizeDescription = 14;
  const lineHeight = 1.5;
  const heightTitle = fontSizeTitle * lineHeight * 2; // The title will ALWAYS occupy 2 lines, even if it's only 1 line long, or 3 lines long.
  /*
   * The number of lines is calculating following this rule:
   * a = the fontSize of the <description> * the lineHeight of the <description>
   * b = the height left after subtracting the height of the <title> from the containerHeight
   * numberOfLines = b / a
   */
  const numberOfLines =
    (containerHeight - heightTitle) / (fontSizeDescription * lineHeight);
  return (
    <View style={{ height: containerHeight }}>
      <Text style={[styles.title, { height: heightTitle }]} numberOfLines={2}>
        {title}
      </Text>
      <Text
        numberOfLines={numberOfLines}
        style={{ fontSize: fontSizeDescription, lineHeight }}
      >
        {description}
      </Text>
    </View>
  );
};

export default MangaInfo;
