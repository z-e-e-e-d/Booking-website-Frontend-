import React from "react";
import guy from "./assets/images/guy.png";
import { motion } from "framer-motion";
const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:px-80">
      <div className="flex flex-col w-[90%] lg:w-110 gap-3 mt-30 bg-transparent lg:mt-20">
        <motion.h3
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 300, opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-500 text-3xl"
        >
          Testimonials
        </motion.h3>
        <motion.h1
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 300, opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="text-blue-950 text-5xl lg:w-110"
        >
          What People Say About Us
        </motion.h1>
      </div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="relative bg-white rounded-2xl w-[85%] p-4 shadow-2xl  lg:w-110 mt-30 "
      >
        <img
          src={guy}
          alt=""
          className="absolute -top-6 -left-6 w-15 h-15 rounded-full "
        />
        <div className="pt-6">
          <p>
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <h2 className="font-bold  mt-6">Mike Taylor</h2>
          <p>Lahore, Pakistan</p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
