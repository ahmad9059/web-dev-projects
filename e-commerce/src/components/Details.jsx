import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import axios from "../utils/Axios";
import { Loading } from "./Loading";

export const Details = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);

  const [product, setProduct] = useState(null);
  const { id } = useParams();

  // const getSingleProduct = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/${id}`);
  //     setProduct(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (!product) {
      setProduct(products.filter((p) => p.id == id)[0]);
    }

    // getSingleProduct();
  }, []);

  const productDeleteHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id != id);
    setProducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    navigate("/");
  };

  return product ? (
    <div className="w-[70%] h-full p-[10%] items-center m-auto flex  justify-between ">
      <img
        className="w-[40%] h-[80%] object-contain "
        src={product.image}
        alt=""
      />
      <div className="content  w-[50%] ">
        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="text-zinc-500 my-4 ">{product.category}</h3>
        <h2 className="text-blue-600 mb-3">${product.price}</h2>
        <p className="mb-[5%]">{product.description}</p>
        <Link
          to={`/edit/${product.id}`}
          className="mr-5 px-3 py-2 bg-blue-500  text-white rounded-md "
        >
          Edit
        </Link>
        <button
          onClick={() => productDeleteHandler(product.id)}
          className="px-3 py-2 bg-red-500 cursor-pointer text-white rounded-md "
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <Loading />
  );
};
