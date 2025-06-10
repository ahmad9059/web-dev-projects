import React from "react";

export const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white text-gray-700">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mb-6"></div>
      <h1 className="text-2xl font-semibold tracking-wide">
        Fetching data, please wait...
      </h1>
    </div>
  );
};
