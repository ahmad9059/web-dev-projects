import axios from "./Axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const Context = (props) => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || [
      {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 },
      },
      {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description:
          "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing...",
        category: "men's clothing",
        image:
          "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        rating: { rate: 4.1, count: 259 },
      },
      {
        id: 3,
        title: "Mens Cotton Jacket",
        price: 55.99,
        description:
          "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions...",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        rating: { rate: 4.7, count: 500 },
      },
      {
        id: 4,
        title: "Mens Casual Slim Fit",
        price: 15.99,
        description:
          "The color could be slightly different between on the screen and in practice...",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: { rate: 2.1, count: 430 },
      },
      {
        id: 5,
        title:
          "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description:
          "From our Legends Collection, the Naga was inspired by the mythical water dragon...",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 4.6, count: 400 },
      },
      {
        id: 6,
        title: "Solid Gold Petite Micropave ",
        price: 168,
        description:
          "Satisfaction Guaranteed. Return or exchange any order within 30 days...",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 3.9, count: 70 },
      },
      {
        id: 7,
        title: "White Gold Plated Princess",
        price: 9.99,
        description:
          "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her...",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 3, count: 400 },
      },
      {
        id: 8,
        title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
        price: 10.99,
        description:
          "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        category: "jewelery",
        image:
          "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        rating: { rate: 1.9, count: 100 },
      },
      {
        id: 9,
        title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
        price: 64,
        description:
          "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        rating: { rate: 3.3, count: 203 },
      },
      {
        id: 10,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        description:
          "Easy upgrade for faster boot up, shutdown, application load and response...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        rating: { rate: 2.9, count: 470 },
      },
      {
        id: 11,
        title:
          "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109,
        description:
          "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        rating: { rate: 4.8, count: 319 },
      },
      {
        id: 12,
        title:
          "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 114,
        description:
          "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        rating: { rate: 4.8, count: 400 },
      },
      {
        id: 13,
        title:
          "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599,
        description:
          "21.5 inches Full HD IPS display with FreeSync, 75Hz HDMI input, ultra-thin design...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        rating: { rate: 2.9, count: 250 },
      },
      {
        id: 14,
        title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor",
        price: 999.99,
        description:
          "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side...",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: { rate: 2.2, count: 140 },
      },
      {
        id: 15,
        title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
        price: 56.99,
        description:
          "US standard size, detachable liner, waterproof outer layer, adjustable hood and cuffs...",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        rating: { rate: 2.6, count: 235 },
      },
      {
        id: 16,
        title:
          "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        price: 29.95,
        description:
          "Faux leather material for style and comfort / Button detail on waist / Detail stitching...",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        rating: { rate: 2.9, count: 340 },
      },
      {
        id: 17,
        title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        description:
          "Lightweight with hood, adjustable waist, waterproof, side pockets, perfect for travel...",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        rating: { rate: 3.8, count: 679 },
      },
      {
        id: 18,
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        description:
          "95% RAYON 5% SPANDEX, Lightweight fabric with great stretch for comfort...",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        rating: { rate: 4.7, count: 130 },
      },
      {
        id: 19,
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        description:
          "100% Polyester, Moisture wicking, Slim fit, V-neck, Machine washable...",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        rating: { rate: 4.5, count: 146 },
      },
      {
        id: 20,
        title: "DANVOUY Womens T Shirt Casual Cotton Short",
        price: 12.99,
        description:
          "95% Cotton, Casual wear, Soft and stretchable, Letter printed V-neck...",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        rating: { rate: 3.6, count: 145 },
      },
    ]
  );

  // const getProducts = async () => {
  //   try {
  //     const { data } = await axios("/products");
  //     setProducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // console.log(products);

  // const change = 0;

  // useEffect(() => {
  //   getProducts();
  // }, [change]);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
