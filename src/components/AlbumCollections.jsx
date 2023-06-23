import React from "react";
import TopAlbums from "./TopAlbums";
import NewAlbums from "./NewAlbums";
import CardContainer from "./CardContainer";
const AlbumCollections = () => {
  return (
    <div className="flex flex-col gap-4">
      <CardContainer>
        <TopAlbums />
      </CardContainer>
      <CardContainer>
        <NewAlbums />
      </CardContainer>
    </div>
  );
};

export default AlbumCollections;
