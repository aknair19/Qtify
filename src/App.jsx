import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import HeroComponent from "./components/HeroComponent";
import Navbar from "./components/Navbar";
import { BACKENDAPI_ENDPOINT } from "./constants";
import AlbumCollections from "./components/AlbumCollections";
import SongsComponent from "./components/SongsComponent";
function App() {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get(`${BACKENDAPI_ENDPOINT}/albums/top`);
      setData(res?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="">
      <Navbar />
      <HeroComponent />
      <AlbumCollections data={data} type="albums" />
      <SongsComponent />
    </div>
  );
}

export default App;
