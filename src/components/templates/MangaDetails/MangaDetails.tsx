import React from "react";
import MangaBanner from "../../organisms/MangaBanner/MangaBanner";
import { Route } from "@react-navigation/native";
import { MangaDisplay } from "../../types/FormattedMangaType";

interface MangaDetailsProps {
    route: Route<"Manga", { manga: MangaDisplay }>;
}

const MangaDetails: React.FC<MangaDetailsProps> = ({ route }) => {
  const { manga } = route.params;

  return <MangaBanner item={manga} />;
};

export default MangaDetails;
