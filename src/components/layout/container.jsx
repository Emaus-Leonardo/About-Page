import React, { useState } from "react";
import Mimi from "../img/Mimi.png";

export default function Container() {
  const [mimiHovered, setMimiHovered] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <img
        className="cursor-pointer"
        src={Mimi}
        alt="mimi cat"
        onMouseEnter={() => setMimiHovered(true)}
        onMouseLeave={() => setMimiHovered(false)}
        style={{ opacity: mimiHovered ? 0.7 : 1 }}
      />
      <p
        className={`absolute bottom-[780px] ml-[-20px] ${mimiHovered ? "hover:opacity-100" : "opacity-0"}`}
      >
        Mimi
      </p>
      <div className="h-[100px] w-[80%] bg-colorRetangle " />
    </div>
  );
}
