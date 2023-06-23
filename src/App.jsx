import "./App.css";
import CardContainer from "./components/CardContainer";
import HeroComponent from "./components/HeroComponent";
import Navbar from "./components/Navbar";
import TopAlbums from "./components/TopAlbums";
import Card from "./components/card";
import NewAlbums from "./components/NewAlbums";
function App() {
  return (
    <div>
      <Navbar />
      <HeroComponent/>
      <CardContainer ><TopAlbums/></CardContainer>
     <CardContainer><NewAlbums/></CardContainer>
    </div>
  );
}

export default App;
