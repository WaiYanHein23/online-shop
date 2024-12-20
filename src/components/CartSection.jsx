import React from "react";
import Cart from "./Cart";
import Container from "./Container";
import { Link } from "react-router-dom";
import CartStore from "../store/CartStore";
import ProductStore from "../store/ProductStore";
import image from "../assets/imgs/image.jpg";

const CartSection = () => {
  const { carts } = CartStore();
  const { products } = ProductStore();
  const total = carts.reduce((pv, cv) => {
    const cost =
      cv.quantity * products.find(({ id }) => id === cv.productId).price;
    return pv + cost;
  }, 0);
  const tax = total * 0.05;
  const netTotal = total + tax;
  return (
    <>
      <div>
        <h1>
          {carts.map((cart) => (
            <Cart key={cart.id} cart={cart} />
          ))}
        </h1>
      </div>
      {carts.length === 0 && (
        <img src={image} className="w-[300px] block mx-auto" alt="" />
      )}
      <Container>
        <div className="mx-4 border border-black flex justify-end gap-10 mb-4 p-10">
          <div className="text-right">
            <p className="text-gray-600">Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">Tax(10%)</p>
            <p>${tax.toFixed(2)}</p>
          </div>
          <div className="text-right ">
            <p className="text-gray-600">Net Total</p>
            <p>${netTotal.toFixed(2)}</p>
          </div>
          <div className="text-end mb-3">
            <Link className="border border-black px-2 py-2 text-sm">
              Order Now
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CartSection;
