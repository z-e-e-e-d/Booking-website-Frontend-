import React from "react";
import Card from "./Card";
import cardImg from "./assets/images/cardImg1.png";
import cardImg2 from "./assets/images/cardImg2.png";
import cardImg3 from "./assets/images/cardImg3.png";

const Cardssection = () => {
  return (
    <div className="flex flex-col gap-10  ">
      <div className="flex flex-col mx-auto text-center gap-2 ">
        <h3 className="text-gray-500 text-3xl lg:text-3xl">Top Selling</h3>
        <h1 className="text-blue-950 text-5xl lg:text-6xl">Top Destinations</h1>
      </div>
      <div className="flex flex-col gap-10 lg:gap-30 lg:flex-row items-center justify-center">
        <Card
          image={cardImg}
          destination="Rome, Italy"
          price="$5.42k"
          duration="10 Days Trip"
        />
        <Card
          image={cardImg2}
          destination="London, UK"
          price="$4.2k"
          duration="12 Days Trip"
        />
            <Card
          image={cardImg3}
          destination="Full Europe"
          price="$15k"
          duration="28 Days Trip"
        />
        
      </div>
    </div>
  );
};

export default Cardssection;
