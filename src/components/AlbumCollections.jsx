import TopAlbums from "./Albums";
import { RiLoaderFill } from "react-icons/ri";
import CardContainer from "./CardContainer";
const AlbumCollections = ({ data, type }) => {
  return !data ? (
    <div className="text-primary w-100 h-96 flex items-center justify-center text-8xl animate-spin">
      <RiLoaderFill />
    </div>
  ) : (
    <div className="flex flex-col gap-4 w-full py-4">
      <CardContainer>
        <TopAlbums data={data} title={"Top Albums"} type={type} />
      </CardContainer>
      <CardContainer>
        <TopAlbums data={data} title={"New Albums"} type={type} />
      </CardContainer>
    </div>
  );
};

export default AlbumCollections;
