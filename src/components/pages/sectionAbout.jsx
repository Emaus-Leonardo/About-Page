import React, { useState } from "react";
import Mugetsu from "../img/Mugetsu.png";
import Haku from "../img/Haku.png";
import Hiro from "../img/Hiro.png";
import Container from "../layout/container";

function AboutSection() {
  const [mugetsuHovered, setMugetsuHovered] = useState(false);
  const [hiroHovered, setHiroHovered] = useState(false);
  const [hakuHovered, setHakuHovered] = useState(false);

  return (
    <div className="flex h-[1025px] items-center justify-center bg-colorBg">
      <div className="relative flex h-full w-full items-center justify-center bg-gray-100">
        <p className="absolute mb-[450px] mr-[250px] text-[96px]">ABOUT</p>
        <div
          className="mb-[570px] ml-3 absolute"
          onMouseEnter={() => setMugetsuHovered(true)}
          onMouseLeave={() => setMugetsuHovered(false)}
        >
          <img
            src={Mugetsu}
            alt="mugetsu cat"
            className={`hover:opacity-90 ${mugetsuHovered ? "opacity-90 cursor-pointer" : "opacity-100"}`}
          />
          <p
            className={`absolute bottom-[60px] ml-0 ${mugetsuHovered ? "hover:opacity-100" : "opacity-0"}`}
          >
            Mugetsu
          </p>
        </div>

        <div className="absolute left-0 mb-[550px] h-[7px] w-[160px] bg-colorFooter"></div>
        <div className="absolute bottom-32 right-0 z-20 mb-36 h-[400px] w-[400px] bg-colorHeader" />
        <div>
          <img
            src={Haku}
            alt="Haku cat"
            className="cursor-pointer absolute top-[289px] z-20 right-0"
            onMouseEnter={() => setHakuHovered(true)}
            onMouseLeave={() => setHakuHovered(false)}
            style={{ opacity: hakuHovered ? 0.7 : 1 }}
          />
          <p
            className={`absolute bottom-[740px] ml-[970px] z-30 ${hakuHovered ? "hover:opacity-100" : "opacity-0"}`}
          >
            Hiro
          </p>
        </div>
        <div className="relative right-[-50px] z-10 mb-36 ml-auto h-[300px] w-[300px] bg-colorRetangle" />
      </div>

      <div className="relative ml-500px flex h-full w-[80%] flex-col items-center justify-center gap-9 bg-colorHeader p-14 pb-28 ">
        <div>
          <img
            src={Hiro}
            alt="Hiro cat"
            className=" cursor-pointer absolute bottom-0 left-0"
            onMouseEnter={() => setHiroHovered(true)}
            onMouseLeave={() => setHiroHovered(false)}
            style={{ opacity: hiroHovered ? 0.7 : 1 }}
          />
          <p
            className={`absolute bottom-[60px] ml-[-410px] ${hiroHovered ? "hover:opacity-100" : "opacity-0"}`}
          >
            Hiro
          </p>
        </div>

        <Container />
        <div className="w-[80%]  text-base leading-6">
          <p size="xs" as="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="w-[80%] text-base leading-6">
          <p size="xs" as="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
