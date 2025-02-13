import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/images/Logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    
    <div className=" shadow-2xl flex flex-wrap justify-between items-center p-4 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="w-1/3 md:w-auto">
        <img src={logo} alt="Logo" className="h-10" />
      </div>

      {/* Navigation Links */}
      <div className="w-full md:w-auto flex flex-wrap justify-center items-center gap-4 lg:gap-20 mt-4 md:mt-0 font-bold">
        <Link to="/" className="hover:underline">
          Destination
        </Link>
        <Link to="/hotels" className="hover:underline">
          Hotels
        </Link>
        <Link to="/flights" className="hover:underline">
          Flights
        </Link>
        <Link to="/bookings" className="hover:underline">
          Bookings
        </Link>
        <button
          onClick={handleLoginClick}
          className="px-4 py-2 rounded border-1 border-transparent hover:border hover:border-black"
        >
          Login
        </button>
        <button className="px-4 py-2 rounded border-1 border-transparent hover:border hover:border-black">
          Sign up
        </button>
        <select className="p-2 appearance-none bg-transparent focus:outline-none">
          <option value="en">EN</option>
          <option value="ar">AR</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
