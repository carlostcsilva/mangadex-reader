import React, { PureComponent } from "react";
import { View } from "react-native";
import { styles } from "./MangaCover.style";
import FastImage from "react-native-fast-image";
import Title from "../../atoms/Title/Title";
import { MangaDisplay } from "../../types/FormattedMangaType";
import { COVER_URL } from "../../constants/urls";

interface MangaCoverProps {
  item: MangaDisplay;
  width: number;
  height: number;
  hideTitle?: boolean;
}

class MangaCover extends PureComponent<MangaCoverProps> {
  render() {
    const { item, width, height, hideTitle } = this.props;

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
        {!hideTitle && <Title text={item.title} />}
      </View>
    );
  }
}

export default MangaCover;
