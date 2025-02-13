import React from "react";
import BookingCard from "./BookingCard";
import bookingImg1 from "./assets/images/bookingImg1.png";
import bookingImg2 from "./assets/images/bookingImg2.png";
import mandar from "./assets/images/mandar.jpg";
import leaf from "./assets/images/LEAF.png";
import mapIcon from "./assets/images/mapIcon.png";
import send from "./assets/images/send.png";
import bookingImg3 from "./assets/images/bookingImg3.png";
import building from "./assets/images/building.png";
import heart from "./assets/images/heart.png";

const Booking = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:px-80 ">
      <div className="flex flex-col w-[90%] lg:w-110 gap-8 mt-30  bg-transparent ">
        <div>
          <h3 className=" text-3xl text-gray-500 my-2">Easy and Fast</h3>
          <h1 className=" text-5xl text-blue-950">
            Book Your Next Trip In 3 Easy Steps
          </h1>
        </div>
        <div className="flex flex-col gap-5">
          <BookingCard
            icon={bookingImg1}
            title="Choose Destination"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
          />

          <BookingCard
            icon={bookingImg2}
            title="Choose Destination"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
          />

          <BookingCard
            icon={bookingImg3}
            title="Choose Destination"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus."
          />
        </div>
      </div>
      <div className=" bg-white flex flex-col justify-between gap-3 p-4 rounded-3xl shadow-2xl mt-50">
        <img src={mandar} alt="" className=" rounded-3xl" />
        <h1>Trip To Greece</h1>
        <h1>14-29 June by Robbin joseph</h1>
        <div className="flex gap-3">
          <img src={leaf} alt="" />
          <img src={mapIcon} alt="" />
          <img src={send} alt="" />
        </div>
        <div className="flex justify-between">
          <div className="flex justify-between items-center gap-2">
            <img src={building} alt="" />
            <h1>24 people going</h1>
          </div>

          <button>
            <img src={heart} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
