import React from "react";
import img from "./assets/images/icon.png";
import img2 from "./assets/images/icon2.png";
import img3 from "./assets/images/icon3.png";
import img4 from "./assets/images/icon4.png";
import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";
const Servicessection = () => {
  return (
    <div className="flex flex-col gap-10 mb-10">
      <div className="flex flex-col mx-auto text-center gap-2 ">
        <motion.h3
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 300, opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-500 text-3xl lg:text-3xl"
        >
          Category
        </motion.h3>
        <motion.h1
          whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 300, opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="text-blue-950 text-5xl lg:text-6xl"
        >
          We Offer Best Services
        </motion.h1>
      </div>
      <div className="flex flex-col gap-10 lg:flex-row items-center justify-center">
        <ServiceCard
          icon={img}
          title="Calculated Weather"
          description="Built Wicket longer admire do barton vanity itself do in it."
        />

        <ServiceCard
          icon={img2}
          title="Calculated Weather"
          description="Engrossed listening. Park gate sell they west hard for the."
        />
        <ServiceCard
          icon={img3}
          title="Calculated Weather"
          description="Barton vanity itself do in it. Preferd to men it engrossed listening. "
        />

        <ServiceCard
          icon={img4}
          title="Calculated Weather"
          description="We deliver outsourced aviation services for military customers"
        />
      </div>
    </div>
  );
};

export default Servicessection;
