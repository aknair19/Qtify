const Card = ({ card,type }) => {
  //   console.log(card)
  const getCard = (type) => {
    switch (type) {
      case "albums":
        return  <div className="flex flex-col gap-2" key={card?.id}>
        <div className="w-[159px] h-[205px] bg-primary rounded-lg">
          <img
            src={card?.image}
            width="159px"
            height="170px"
            alt="image"
            className="rounded-lg h-[170px] w-full object-cover"
            loading="lazy"
          />
  
          <div className="h-[35px] bg-white rounded-bl-lg rounded-br-lg flex items-center p-2">
            <button className="rounded-xl bg-black text-[10px] p-1 text-white ">
              Follows {card?.follows}
            </button>
          </div>
        </div>
        <div className="text-white text-[14px] font-semi-bold">{card?.title}</div>
      </div>;
      default:
        return <></>;
    }
  };
  return (
   getCard(type)
  );
};

export default Card;
