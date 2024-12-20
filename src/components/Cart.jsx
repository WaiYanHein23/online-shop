import React from "react";
import ProductStore from "../store/ProductStore";
import CartStore from "../store/CartStore";

const Cart = ({ cart: { id, productId, quantity } }) => {
  const { products } = ProductStore();
  const { increaseQuantity, decreaseQuantity, removeHandle } = CartStore();
  const product = products.find((el) => el.id == productId);
  const cost = product.price * quantity;

  const handleIncrease = () => {
    increaseQuantity(id);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      confirm("Are you sure") && removeHandle(id);
    }
  };
  return (
    <div className="mx-4 my-2 border border-black p-5 grid grid-cols-6">
      <div className="col-span-1">
        <img src={product.image} alt="" className="h-16" />
      </div>
      <div className="col-span-2">
        <h4>{product.title}</h4>
        <p className="text-gray-500">Price- ${product.price}</p>
      </div>
      <div className="col-span-1 ">
        <p className="mb-2">Quantity </p>
        <div className="flex items-center mr-2">
          <button onClick={handleDecrease} className="bg-black text-white p-2">
            -
          </button>
          <p className="mx-2"> {quantity}</p>
          <button onClick={handleIncrease} className="bg-black text-white p-2">
            +
          </button>
        </div>
      </div>
      <div className="col-span-1 text-end">
        <p className="text-end">${cost.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
