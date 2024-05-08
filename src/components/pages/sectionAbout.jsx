import React, { useState } from "react";
import Tippy from "@tippyjs/react";

import Mugetsu from "../img/Mugetsu.png";
import Haku from "../img/Haku.png";
import Hiro from "../img/Hiro.png";
import Profile from "../img/Profile.png";
import Container from "../layout/container";
import "../pages/style.css";

function AboutSection() {
  const [mugetsuHovered, setMugetsuHovered] = useState(false);

  return (
    <div className="flex h-[1025px] items-center justify-center bg-colorBg">
      <div className="relative flex h-full w-full items-center justify-center bg-gray-100">
        <p className="absolute mb-[450px] mr-[250px] text-[96px]">ABOUT</p>
        <div
          className="mb-[574px] ml-3 absolute"
          onMouseEnter={() => setMugetsuHovered(true)}
          onMouseLeave={() => setMugetsuHovered(false)}
        >
          <img
            src={Mugetsu}
            alt="mugetsu cat"
            className={`transition-opacity ${mugetsuHovered ? "opacity-85 cursor-pointer" : "opacity-100"}`}
          />
          <p
            className={`absolute bottom-[60px] ml-0 ${mugetsuHovered ? "transition-opacity" : "opacity-0"}`}
          >
            Mugetsu
          </p>
        </div>

        <div className="absolute left-0 mb-[550px] h-[7px] w-[160px] bg-colorFooter"></div>
        <div className="absolute bottom-32 right-0 z-20 mb-36 h-[400px] w-[400px]">
          <img
            className=" profile"
            src={Profile}
            alt="profile pic"
          />
        </div>

        <Tippy content="Haku">
          <img
            src={Haku}
            alt="Haku cat"
            className="cursor-pointer absolute transition-opacity hover:opacity-70 top-[289px] z-20 right-0 mr-[50px]"
          />
        </Tippy>
        <div className="relative rounded-lg right-[-50px] z-10 mb-[90px] ml-auto h-[300px] w-[300px] bg-colorRetangle" />
      </div>

      <div className="relative ml-500px flex max-h-[1025px] h-full w-[80%] flex-col items-center justify-center gap-9 bg-colorHeader p-14 pb-[250px] ">
        <Tippy content="Hiro">
          <img
            src={Hiro}
            alt="Hiro cat"
            className=" cursor-pointer absolute bottom-0 left-0 transition-opacity hover:opacity-75"
          />
        </Tippy>
        <Container />
        <div className="w-[80%] text-base leading-6">
          <p size="xs" as="p">
            Ola, meu nome é Emaús Leonardo, mas pode me chamar de Léo.
            Atualmente, estou mergulhando no mundo do desenvolvimento Front End
            com o objetivo de aprimorar minhas habilidades para me posicionar no
            mercado. Sou apaixonado por criar experiências online
            impressionantes para os usuários e estou disposto a trabalhar em
            projetos desafiadores e a ajudar equipes criativas e dinâmicas.
          </p>
        </div>
        <div className="w-[80%] text-base leading-6">
          <p size="xs" as="p">
            Além disso, sou estudante do sexto semestre no curso de Análise e
            Desenvolvimento de Sistemas na Universidade do Oeste Paulista, em
            Presidente Prudente/SP.
          </p>
        </div>
        <div className="w-[80%] text-base leading-6">
          <p size="xs" as="p">
            Também acumulei experiência como Estagiário de Suporte Técnico na
            Prefeitura Municipal de Rancharia/SP por 1 ano e 6 meses.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
