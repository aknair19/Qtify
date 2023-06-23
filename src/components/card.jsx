const Card = () => {
  return (
    <div className="flex flex-col gap-1">
    <div className="w-[159px] h-[205px] bg-teal-600 rounded-lg">
      <img width="159px" height="170px" alt="image" className="rounded-lg" />
      <div className="h-[35px] bg-white rounded-bl-lg rounded-br-lg flex items-center p-2">
        <button className="rounded-xl bg-black text-xs p-1 text-white ">
          Lorem10
        </button>
      </div>
    </div>
<div className="text-white text-[14px] font-semi-bold">New English Songs</div>
    </div>
  );
};

export default Card;
