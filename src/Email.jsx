import React from "react";
import "./index.css";
import sendImg from "./assets/images/prplSend.png";
import { motion } from "framer-motion";
const Email = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative shadow-2xl bg-white flex flex-col items-center justify-center w-[90%] lg:w-300 mt-40 lg:mt-0 mb-40 lg:h-90 mx-auto rounded-tl-[150px] rounded-2xl "
    >
      <img
        src={sendImg}
        alt=""
        className="absolute top-[-20px] right-[-20px]"
      />
      <div className="text-blue-950 text-4xl text-center p-20 leading-15">
        Subscribe to get information, latest news and other interesting offers
        about Jadoo
      </div>
      <div className="flex flex-row gap-4 justify-center items-center mb-10 ">
        <input
          type="email"
          placeholder="Your email"
          className="bg-white p-3 rounded-xl lg:w-100 w-[90%]"
        />
        <button className="bg-orange-400 text-white p-3 rounded-xl hover:bg-orange-700">
          Subscribe
        </button>
      </div>
    </motion.div>
  );
};

export default Email;
