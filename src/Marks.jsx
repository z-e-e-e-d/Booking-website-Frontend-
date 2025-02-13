import React from "react";
import mark1 from "./assets/images/mark1.png";
import mark2 from "./assets/images/mark2.png";
import mark3 from "./assets/images/mark3.png";
import mark4 from "./assets/images/mark4.png";
import mark5 from "./assets/images/mark5.png";
const Marks = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center">
      <img src={mark1} alt="" />
      <img src={mark2} alt="" className=""/>
      <img src={mark3} alt="" className="mt-35 "/>
      <img src={mark4} alt="" />
      <img src={mark5} alt="" />
    </div>
  );
};

export default Marks;
