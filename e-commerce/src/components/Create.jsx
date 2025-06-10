import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const naviage = useNavigate();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [products, setProducts] = useContext(ProductContext);

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      price.trim().length < 1 ||
      category.trim().length < 3 ||
      description.trim().length < 5
    ) {
      alert("Each Field contain alteast 4 characters");
      return;
    }
    const product = {
      id: nanoid(),
      title,
      image,
      price,
      category,
      description,
    };
    setProducts([...products, product]);
    localStorage.setItem("products", JSON.stringify([...products, product]));
    naviage("/");
    toast.success("Product Added Successfully");
  };

  return (
    <form
      onSubmit={AddProductHandler}
      className="p-[5%] flex flex-col items-center w-screen h-screen "
    >
      <h1 className="text-3xl mb-8 font-medium font-mono ">Add New Product</h1>

      <input
        type="text"
        placeholder="Title"
        className="text-2xl bg-zinc-200 rounded-md p-2 w-1/2 mb-3 "
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        placeholder="Image Url"
        className="text-2xl bg-zinc-200 rounded-md p-2 w-1/2 mb-3 "
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <div className="w-1/2 flex gap-2 ">
        <input
          type="number"
          placeholder="Price"
          className="text-2xl bg-zinc-200 rounded-md p-2 w-1/2 mb-3 "
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <input
          type="text"
          placeholder="Category"
          className="text-2xl bg-zinc-200 rounded-md p-2 w-1/2 mb-3 "
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
      </div>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="text-xl bg-zinc-200 rounded-md p-2 w-1/2 mb-4 "
        placeholder="Enter The Product Description"
        rows="10"
      ></textarea>
      <button className="px-3 py-2 bg-blue-500 cursor-pointer text-lg text-white rounded-md ">
        Add New Product
      </button>
    </form>
  );
};

export default Create;
