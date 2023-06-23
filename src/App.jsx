import "./App.css";
import HeroComponent from "./components/HeroComponent";
import Navbar from "./components/Navbar";

import AlbumCollections from "./components/AlbumCollections";
function App() {
  return (
    <div>
      <Navbar />
      <HeroComponent />
      <AlbumCollections />
    </div>
  );
}

export default App;
