import React from "react";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router-dom";
import CartStore from "../store/CartStore";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const { carts, addCart } = CartStore();
  const navigate = useNavigate();
  const handleAdd = (e) => {
    e.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: product.id,
      quantity: 1,
    };
    addCart(newCart);
  };

  const handleAdded = (e) => {
    e.stopPropagation();
    toast.error("Items is already in Cart");
  };

  const handleDetails = () => {
    navigate(`/product_details/${product.id}`);
  };
  return (
    <div
      onClick={handleDetails}
      className="border border-black p-5 flex flex-col gap-5 items-start"
    >
      <img src={product.image} className="h-40" alt="" />
      <p className="font-bold line-clamp-2">{product.title}</p>
      <Rating product={product} />
      <div className="flex justify-between mb-2 w-full items-end ">
        <p> Price-${product.price}</p>
        {carts.find((cart) => cart.productId == product.id) ? (
          <button
            onClick={handleAdded}
            className="text-sm border border-black px-4 py-2  bg-red-600 text-white"
          >
            Added
          </button>
        ) : (
          <button
            onClick={handleAdd}
            className="text-sm border border-black px-2 py-2 "
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
