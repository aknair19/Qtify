import React, { useState } from "react";
import Card from "./card";
import { FcCollapse } from "react-icons/fc";
import Carousel from "./Carousel/Carousel";
const Albums = ({ data, type, title }) => {
  const [show, setShow] = useState(false);
  const toggleButton = () => {
    setShow(!show);
  };
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex justify-between text-primary text-sm ">
        <h1 className="text-white my-2 font-bold"> {title} </h1>
        <button onClick={() => toggleButton()}>
          {!show ? (
            <div className="flex items-center gap-1">
              Collapse All{" "}
              <p className="text-primary">
                <FcCollapse />
              </p>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              Show All{" "}
              <p className="text-primary rotate-180">
                <FcCollapse />
              </p>
            </div>
          )}{" "}
        </button>
      </div>
      <div className="px-2 flex flex-wrap gap-8">
        {show ? (
          <Carousel
            data={data}
            component={(data) => <Card data={data} type={type} />}
          />
        ) : (
          data.map((card) => {
            return <Card card={card} key={card?.id} type={type} />;
          })
        )}
      </div>
    </div>
  );
};

export default Albums;
