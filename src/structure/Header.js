import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MdCompare } from "react-icons/md";

// contexts
import { CompareContext } from "../contexts/compare.context";

const Header = () => {
  const contextValue = useContext(CompareContext
    )
  return (
    <header className=" w-screen">
  
      <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="./" className="font-bold text-xl tracking-tight">
            CRUD Todo App Mern Stack
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-300 hover:border-gray-300">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-lg lg:flex-grow inline-flex">
            <div className="text-lg">
              <Link
                to="./"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
              >
                Home
              </Link>
            </div>
            <div className="text-lg">
              <Link
                to="./products"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
              >
                Products
              </Link>
            </div>
          </div>
          <div className="text-2xl ">
            <Link
              to="./compare"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-300 mr-4"
            >
              <div className=" relative mr-6 ">
                <MdCompare />
                <div className="absolute inline-block top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 py-1 px-2.5 text-xs leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-700 text-white rounded-full z-10">
                 {contextValue.compareList.length}
                </div>
              </div>
            </Link>
          </div>
          <div>
            <Link
              to="signIn"
              className="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-600 hover:bg-white mt-4 lg:mt-0"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
