import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between text-center bg-black bg-opacity-10 p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 cursor-pointer text-4xl font-bold">
          NETFLIX
        </h1>
      </Link>
      <div>
        <Link to="/login">
          <button className="text-white pr-4">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="bg-red-600 py-2 px-6 rounded cursor-pointer text-white">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
