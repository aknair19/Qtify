
import Card from "./card";

const NewAlbums = () => {
  return (
    <div>
      <h1 className="text-white my-2 font-bold"> New Albums</h1>
      <div className="px-2 flex flex-wrap gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default NewAlbums;
