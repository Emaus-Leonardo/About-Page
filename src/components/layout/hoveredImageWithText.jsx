import React from 'react';

const HoveredImageWithText = ({ imageSrc, altText, text, className="" }) => {
  return (
    <div className="group flex items-center justify-center">
      <img src={imageSrc} alt={altText} className="mb-[570px] ml-[1040px]  hover:opacity-80" />
      <p className="absolute opacity-0 group-hover:opacity-100 mb-[650px] ml-[1030px] ">{text}</p>
    </div>
  );
};

export default HoveredImageWithText;
