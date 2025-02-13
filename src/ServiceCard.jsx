import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col justify-between items-center bg-blue rounded-4xl gap-3 w-52 h-70 p-7 m-10 bg-white shadow-2xl">
      <img src={icon} alt="" className="w-20" />
      <h1 className="text-center font-bold ">{title}</h1>
      <h3 className="text-center">{description}</h3>
    </div>
  );
};

export default ServiceCard;
