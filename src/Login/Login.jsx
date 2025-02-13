import React from "react";
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";
const Login = () => {
  return (
    <div className="flex flex-col gap-4 mx-auto bg-white w-[80%] lg:w-140 p-15 rounded-4xl mt-30 shadow-2xs border-1">
      <label htmlFor="">Email</label>
      <input type="email" className="border-1 rounded-2xl p-4 " />
      <label htmlFor="">Password</label>
      <input type="password" className="border-1 rounded-2xl p-4" />
      <h3>Forget Password?</h3>
      <button className="bg-black text-white font-bold rounded-2xl p-1 w-30 self-center hover:bg-gray-700">
        Login
      </button>
      <h3>or continue with</h3>
      <div className="flex items-center justify-between  ">
      <a href="" className="bg-black  lg:px-8 px-2 py-1 rounded-2xl ">
          <FaGoogle size={30} color="white"/>
        </a>
        <a href="" className="bg-black  lg:px-8 px-2 py-1 rounded-2xl ">
          <FaGithub size={30} color="white" />
        </a>
        <a href="" className="bg-black  lg:px-8 px-2 py-1 rounded-2xl ">
          <FaFacebook size={30} color="white"/>
        </a>
      </div>
      <h3>Don't have an account yet?</h3>
      <h3>Register for free</h3>
    </div>
  );
};

export default Login;
