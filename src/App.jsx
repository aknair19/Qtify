import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import HeroComponent from "./components/HeroComponent";
import Navbar from "./components/Navbar";
import { BACKENDAPI_ENDPOINT } from "./constants";
import AlbumCollections from "./components/AlbumCollections";
function App() {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get(`${BACKENDAPI_ENDPOINT}/top`);
      setData(res?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <HeroComponent />
      <AlbumCollections data={data} type='albums' />
    </div>
  );
}

export default App;
