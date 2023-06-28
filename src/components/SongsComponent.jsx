import axios from "axios";
import React, { useState, useEffect } from "react";
import { BACKENDAPI_ENDPOINT, GENRES } from "../constants";
import Card from "./card";
import CardContainer from "./CardContainer";
import Slider from "./SLider";

const SongsComponent = () => {
  const [songs, setSongs] = useState([]);
  const [genre, setGenre] = useState("");
  const [filteredSongs, setFilteredSongs] = useState([]);

  const getSongs = async () => {
    const data = await axios.get(`${BACKENDAPI_ENDPOINT}/songs`);
    setSongs(data?.data);
    setFilteredSongs(data?.data);
    console.log(data?.data);
  };

  useEffect(() => {
    try {
      getSongs();
    } catch (error) {
      console.log(error);
    }
  }, [filteredSongs]);

  return (
    <div className="w-full border-y border-y-primary  flex flex-col gap-2 p-2">
      <h4 className="text-sm text-white font-semibold">Songs</h4>
      <div className="text-white text-sm px-3 py-1">
        {GENRES.map((gen, i) => {
          return (
            <button
              key={i}
              className="px-2 text-white pointer hover:border-b-2 hover:border-primary "
            >
              {gen.name}
            </button>
          );
        })}
      </div>

      <Slider data={filteredSongs} type="songs" />
    </div>
  );
};

export default SongsComponent;
