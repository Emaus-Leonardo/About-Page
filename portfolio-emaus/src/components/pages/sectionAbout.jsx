import Mugetsu from "../img/Mugetsu.png";
import Hiro from "../img/Hiro.png";
import Haku from "../img/Haku.png";
import Container from "../layout/container";

function AboutSection() {
  return (
    <div className=" flex h-[1025px] items-center justify-center bg-colorBg">
      <div className="relative flex  h-full w-full items-center justify-center bg-gray-100">
        <p className="absolute mb-[450px] mr-[250px] text-[96px]">ABOUT</p>
        <img src={Mugetsu} alt="mugetsu cat" className="mb-[570px] ml-3" />
        <div className=" absolute left-0 mb-[550px] h-[7px] w-[160px] bg-colorFooter"></div>
        <div className=" absolute bottom-32 right-0 z-10 mb-36 h-[400px] w-[400px] bg-colorHeader" />
        <div className=" absolute right-[-50px] mb-36 ml-auto h-[300px] w-[300px] bg-colorRetangle" />
      </div>

      <div className="rela ml-500px flex h-full w-[100%] flex-col items-center justify-center gap-9 bg-colorHeader p-14 pb-28 ">
          <Container />
        <div className="w-[79%]  text-base leading-6">
          <p size="xs" as="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="w-[79%] text-base leading-6">
          <p size="xs" as="p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <img src={Hiro} alt="Hiro cat" />

        <img src={Haku} alt="Haku cat" />
      </div>
    </div>
  );
}

export default AboutSection;
