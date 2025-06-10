import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import { Loading } from "./Loading";
import axios from "../utils/Axios";
import Topbar from "./Topbar";
const Home = () => {
  const [products] = useContext(ProductContext);

  const [filteredProducts, setFilteredProducts] = useState(null);

  const { search } = useLocation();

  const category = decodeURIComponent(search.split("=")[1]);

  const getProductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!filteredProducts || category == "undefined")
      setFilteredProducts(products);
    if (category != "undefined") {
      setFilteredProducts(products.filter((p) => p.category == category));
      // getProductCategory();
    }
  }, [category, products]);

  // console.log(filteredProducts);

  return products ? (
    <>
      <div className="flex flex-col w-full h-full ">
        <div>
          <Topbar />
        </div>
        <div className="w-full h-full flex overflow-hidden ">
          <Nav />
          <div className=" w-[87%] p-10 pt-[3%] flex flex-wrap overflow-x-hidden overflow-y-auto">
            {filteredProducts &&
              filteredProducts.map((product, index) => {
                return (
                  <Link
                    key={index}
                    to={`/details/${product.id}`}
                    className="card mr-4 mb-6 p-4 shadow-lg rounded-lg w-[200px] h-[300px] hover:shadow-xl transition-all duration-300 bg-white"
                  >
                    <div
                      className="w-full h-[180px] bg-contain bg-no-repeat bg-center mb-4 transition-transform duration-200 ease-in-out hover:scale-105"
                      style={{
                        backgroundImage: `url(${product.image})`,
                      }}
                    ></div>
                    <h1 className="text-sm font-semibold text-center text-gray-800 hover:text-blue-700 line-clamp-2">
                      {product.title}
                    </h1>
                    <h1 className="text-md font-semibold mt-2 text-center text-blue-800 hover:text-blue-700 line-clamp-2">
                      ${product.price}
                    </h1>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
