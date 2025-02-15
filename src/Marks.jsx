import React from "react";
import Marquee from "react-fast-marquee";
import mark1 from "./assets/images/mark1.png";
import mark2 from "./assets/images/mark2.png";
import mark3 from "./assets/images/mark3.png";
import mark4 from "./assets/images/mark4.png";
import mark5 from "./assets/images/mark5.png";

const Marks = () => {
  return (
    <Marquee gradient={false} speed={250} play={true} className="flex gap-100 justify-center items-center">
      <img src={mark1} alt="" className="h-40 pr-20" />
      <img src={mark2} alt="" className="h-40" />
      <img src={mark3} alt="" className="h-60 mt-30" />
      <img src={mark4} alt="" className="h-10" />
      <img src={mark5} alt="" className="h-10 pl-30" />
    </Marquee>
  );
};

export default Marks;