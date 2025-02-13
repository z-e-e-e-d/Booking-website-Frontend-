import React from "react";

const BookingCard = ({icon, title, description}) => {
  return (
    <div className="flex flex-row gap-4 justify-between items-center">
      <img src={icon} alt="" className="w-12 h-12"/>
      <div className="flex flex-col ">
        <h1 className=" font-bold">{title}</h1>
        <p className=" leading-5">{description}</p>
      </div>
    </div>
  );
};

export default BookingCard;
