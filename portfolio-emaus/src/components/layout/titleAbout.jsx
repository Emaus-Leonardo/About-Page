import React from "react";
import Mugetsu from "../img/Mugetsu.png"

export default function TitleAbout() {
  return (
    <div>
      <p className="absolute mb-[450px] mr-[250px] text-[96px]">ABOUT</p>
      <img src={Mugetsu} alt="mugetsu cat" className="mb-[570px] ml-3" />
      <div className=" absolute left-0 mb-[550px] h-[7px] w-[160px] bg-colorFooter"></div>
    </div>
  );
}
