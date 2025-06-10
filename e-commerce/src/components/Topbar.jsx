import React from "react";

const Topbar = () => {
  return (
    <div className="w-full h-14 bg-white shadow-md flex items-center justify-between px-8">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <a href="/">ShopEase</a>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <a href="/" className="hover:text-blue-600">
          Home
        </a>
        <a href="/" className="hover:text-blue-600">
          Products
        </a>
        <a href="#" className="hover:text-blue-600">
          Categories
        </a>
        <a href="#" className="hover:text-blue-600">
          About
        </a>
        <a href="#" className="hover:text-blue-600">
          Contact
        </a>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-blue-600 text-xl">
          🔍
        </button>

        <button className="relative text-xl text-gray-700 hover:text-blue-600">
          🛒
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span>
        </button>

        <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
          Login
        </button>
      </div>
    </div>
  );
};

export default Topbar;
