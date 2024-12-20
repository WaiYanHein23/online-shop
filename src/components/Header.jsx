import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import CartStore from "../store/CartStore";

export const Header = () => {
  const { carts } = CartStore();
  return (
    <header className="p-5">
      <div className="flex justify-between items-center relative">
        <Link to="/" className="text-2xl font-bold">
          Online Shop
        </Link>
        <Link to="/my_cart" className="border border-black px-3 py-2">
          My Cart
          <span className=" absolute top-0 right-0 -translate-x-0 -translate-y-2 bg-red-600  px-1 py-1 text-xs">
            {carts.length}
          </span>
        </Link>
      </div>
    </header>
  );
};
