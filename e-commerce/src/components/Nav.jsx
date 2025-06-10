import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const Nav = () => {
  const [products] = useContext(ProductContext);

  let distnictCategory =
    products && products.reduce((acc, cv) => [...acc, cv.category], []);

  distnictCategory = [...new Set(distnictCategory)];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(
      Math.random() * 255
    ).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  };

  return (
    <nav className="w-[13%] h-[100vh] bg-zinc-100 shadow-md flex flex-col items-center pt-6">
      <a
        href="/create"
        className="px-4 py-2 mb-5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200"
      >
        + Add New Product
      </a>

      <div className="w-[85%]">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
          Category Filter
        </h2>

        <div className="flex flex-col gap-3">
          {distnictCategory.map((cate, index) => (
            <Link
              key={index}
              to={`/?category=${cate}`}
              className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-150"
            >
              <span
                style={{ backgroundColor: color() }}
                className="rounded-full w-3 h-3 mr-3 border border-gray-300"
              ></span>
              <span className="capitalize text-sm font-medium">{cate}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
