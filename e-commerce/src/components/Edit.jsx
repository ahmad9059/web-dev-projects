import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const [products, setProducts] = useContext(ProductContext);
  const naviage = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    image: "",
    price: "",
    category: "",
    description: "",
  });

  const changeHandler = (e) => {
    // console.log(e.target.name, e.target.value);
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setProduct(products.filter((p) => p.id == id)[0]);
  }, [id]);
  //   console.log(product);

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.category.trim().length < 3 ||
      product.description.trim().length < 5
    ) {
      alert("Each Field contain alteast 4 characters");
      return;
    }
    const productIndex = products.findIndex((p) => p.id == id);
    const copyData = [...products];
    copyData[productIndex] = { ...products[productIndex], ...product };
    console.log(copyData);

    setProducts(copyData);
    localStorage.setItem("products", JSON.stringify(copyData));
    naviage(-1);
  };
  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] flex flex-col items-center w-screen h-screen "
    >
      <h1 className="text-3xl mb-8 font-medium font-mono ">Edit Product</h1>

      <input
        type="text"
        placeholder="Title"
        className="text-2xl bg-zinc-200 rounded-md p-2 w-1/2 mb-3 "
        name="title"
        onChange={changeHandler}
        value={product && product.title}
      />
      <input
        type="text"
        placeholder="Image Url"
        className="text-2xl bg-zinc-200 rounded-md p-2 w-1/2 mb-3 "
        name="image"
        onChange={changeHandler}
        value={product && product.image}
      />
      <div className="w-1/2 flex gap-2 ">
        <input
          type="number"
          placeholder="Price"
          className="text-2xl bg-zinc-200 rounded-md p-2 w-1/2 mb-3 "
          name="price"
          onChange={changeHandler}
          value={product && product.price}
        />
        <input
          type="text"
          placeholder="Category"
          className="text-2xl bg-zinc-200 rounded-md p-2 w-1/2 mb-3 "
          name="category"
          onChange={changeHandler}
          value={product && product.category}
        />
      </div>
      <textarea
        name="description"
        onChange={changeHandler}
        value={product && product.description}
        className="text-xl bg-zinc-200 rounded-md p-2 w-1/2 mb-4 "
        placeholder="Enter The Product Description"
        rows="10"
      ></textarea>
      <button className="px-3 py-2 bg-blue-500 cursor-pointer text-lg text-white rounded-md ">
        Edit Product
      </button>
    </form>
  );
};

export default Edit;
