import React from "react";
import Haku from "../img/Haku.png";

export default function Box() {
  return (
    <div className="flex w-full flex-col items-center justify-center relative">
      <img className="absolute mb-[410px] z-10" src={Haku} alt="Haku cat" />
      <div className=" absolute top-[-170px] right-0 z-10 h-[400px] w-[400px] bg-colorHeader" />
      <div className=" absolute right-[-50px] mb-36 ml-auto h-[300px] w-[300px] bg-colorRetangle" />
    </div>
  );
}
