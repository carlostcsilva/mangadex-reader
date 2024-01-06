import React from "react";
import { Text } from "react-native";
import { styles } from "./Title.style";

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <Text style={styles.title} numberOfLines={2}>
      {text}
    </Text>
  );
};

export default Title;
