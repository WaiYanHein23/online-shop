import React from "react";
import Container from "../components/Container";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import BreadCrumb from "../components/BreadCrumb";
import ProductStore from "../store/ProductStore";
import CartStore from "../store/CartStore";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = ProductStore();
  const { carts, addCart } = CartStore();

  const currentProduct = products.find((product) => product.id == id);
  const handleAdd = (e) => {
    e.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    };
    addCart(newCart);
  };

  const handleAdded = (e) => {
    e.stopPropagation();
    toast.error("Items is already in Cart");
  };
  return (
    <Container>
      <BreadCrumb currentPage="Product Details" />
      <div className="border border-black mx-4 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1">
            <img
              src={currentProduct.image}
              className="h-[200px] md:h-auto  md:w-2/6 block md:mx-auto "
              alt=""
            />
          </div>
          <div className="col-span-1 flex flex-col gap-3 items-start">
            <h4 className="text-1xl font-bold"> {currentProduct.title}</h4>
            <p className="bg-gray-300  text-gray-700 inline-block">
              {currentProduct.category}
            </p>
            <p className="text-sm md:w-[300px]">{currentProduct.description}</p>
            <Rating product={currentProduct} />
            <div className="flex justify-between my-auto w-full items-center">
              <p className="my-2">Price - ${currentProduct.price}</p>
              {carts.find((cart) => cart.productId == currentProduct.id) ? (
                <button
                  onClick={handleAdded}
                  className="border border-black px-2 py-2 text-sm bg-red-600 text-white"
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
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
