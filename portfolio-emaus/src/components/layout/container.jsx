import React from "react";
import Mimi from "../img/Mimi.png";

export default function Container() {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <img className="" src={Mimi} alt="mimi cat" />
      <div className="h-[100px] w-[79%] bg-colorRetangle " />
    </div>
  );
}
