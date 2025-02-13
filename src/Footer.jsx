import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import appStore from "./assets/images/Play Store.png";
import playStore from "./assets/images/Google Play.png";
const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex lg:flex-row flex-col justify-center items-center gap-30 mt-10">
        <div className="flex flex-col gap-2 w-70 mb-8">
          <h1 className="text-5xl text-blue-950">Jadoo.</h1>
          <p className="text-gray-700">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-2">
          <h1 className="font-bold text-[20px] mb-2 text-blue-950">Company</h1>
          <h1 className="font-bold text-[20px] mb-2 text-blue-950">Contact</h1>
          <h1 className="font-bold text-[20px] mb-2 text-blue-950">More</h1>
          <h2>About</h2>
          <h2>Help/FAQ</h2>
          <h2>Affilates</h2>
          <h2>Careers</h2>
          <h2>Press</h2>
          <h2>Airline</h2>
          <h2>Mobile</h2>
          <h2>Airlinefess</h2>
          <h2>Low fare tips</h2>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="flex gap-2">
            <a href="" className=" px-2 py-1 bg-white shadow-2xl rounded-full ">
              <FaFacebook size={30} />
            </a>
            <a
              href=""
              className="  px-2 py-1 bg-white shadow-2xl rounded-full "
            >
              <FaInstagram size={30} />
            </a>
            <a
              href=""
              className="  px-2 py-1 bg-white shadow-2xl rounded-full "
            >
              <FaTwitter size={30} />
            </a>
          </div>
          <h1 className="text-[20px] mb-2">Discover our app</h1>
          <div className="flex gap-2">
            <img src={playStore} alt="" />
            <img src={appStore} alt="" />
          </div>
        </div>
      </div>
      <p className="text-gray-700 self-center mt-15 mb-15">
      All rights reserved@jadoo.co
          </p>
    </div>
  );
};

export default Footer;
