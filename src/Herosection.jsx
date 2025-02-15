import React from "react";
import girl from "./assets/images/girl.png";
import playButton from "./assets/images/Playbutton.png";
import { motion } from "framer-motion";
const Herosection = () => {
  return (
    <motion.div
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: 300, opacity: 0 }}
      transition={{ duration: 0.9 }}
      className="flex justify-around flex-col lg:flex-row"
    >
      <div className="flex flex-col justify-center items-center mx-auto mt-40 lg:mt-0 lg:mx-0 p-4 gap-5 w-[90%] lg:w-1/3 lg:gap-8 lg:p-24">
        <h3 className=" text-orange-600 text-2xl lg:text-3xl ">
          Best Destinations around the world
        </h3>
        <h1 className=" text-blue-950 text-6xl lg:text-7xl">
          Travel, enjoy and live a new and full life
        </h1>
        <h5 className="text-gray-500">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </h5>
        <div className="flex items-start gap-4 p-0 w-full">
          <button className=" bg-orange-400 p-2.5 rounded-xl text-white h-12 hover:bg-orange-700">
            Find out more
          </button>
          <button className="flex justify-between items-center h-12 border-orange-400 hover:border-2 pt-0.5 rounded-2xl pr-6 box-border">
            <img src={playButton} alt="" className="w-18" />
            <h>Play Demo</h>
          </button>
        </div>
      </div>
      <div>
        <motion.img
          src={girl}
          alt=""
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 300, opacity: 0 }}
          transition={{ duration: 0.9 }}
        />
      </div>
    </motion.div>
  );
};

export default Herosection;
