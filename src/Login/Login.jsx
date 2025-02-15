import React from "react";
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import {motion} from "framer-motion"

const Login = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 mx-auto bg-white w-[80%] h- lg:w-140 p-15 rounded-4xl mt-40 lg:mt-20 shadow-2xs border-1  ">
      <label htmlFor="">Email</label>
      <input type="email" className="border-1 rounded-2xl lg:p-4 p-2  " />
      <label htmlFor="">Password</label>
      <input type="password" className="border-1 rounded-2xl lg:p-4 p-2" />
      <h3>Forget Password?</h3>
      <button className="bg-black text-white font-bold rounded-2xl p-3 w-30 self-center hover:bg-gray-700">
        Login
      </button>
      <h3 className="text-center">or continue with</h3>
      <div className="flex items-center justify-between  ">
        <a href="" className="bg-black  lg:px-8 px-2 py-1 rounded-2xl ">
          <FaGoogle size={30} color="white" />
        </a>
        <a href="" className="bg-black  lg:px-8 px-2 py-1 rounded-2xl ">
          <FaGithub size={30} color="white" />
        </a>
        <a href="" className="bg-black  lg:px-8 px-2 py-1 rounded-2xl ">
          <FaFacebook size={30} color="white" />
        </a>
      </div>
      <div className=" flex items-center justify-center gap-1">
        <h3>Don't have an account yet?</h3>
        <Link to="/signup" className="underline">
          Register for free
        </Link>
      </div>
    </div>
  );
};

export default Login;
