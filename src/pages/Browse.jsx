import React from "react";
import BrowseContainer from "../containers/BrowseContainer";
import { UseContentHook } from "../hooks/useContent";
import { selectFilter } from "../utils/selectFilter";
export const BrowsePage = () => {
  const { series } = UseContentHook("series");
  const { films } = UseContentHook("films");
  const mediaData = selectFilter(series, films);

  return <BrowseContainer mediaData={mediaData} />;
};
