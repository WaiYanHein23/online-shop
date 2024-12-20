import React from "react";
import Container from "../components/Container";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/Rating";
import BreadCrumb from "../components/BreadCrumb";
import ProductStore from "../store/ProductStore";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = ProductStore();
  const currentProduct = products.find((product) => product.id == id);
  return (
    <Container>
      <BreadCrumb currentPage="Product Details" />
      <div className="border border-black mx-4 p-10">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <img
              src={currentProduct.image}
              className="w-2/6 block mx-auto "
              alt=""
            />
          </div>
          <div className="col-span-1 flex flex-col gap-3 items-start">
            <h4 className="text-1xl font-bold"> {currentProduct.title}</h4>
            <p className="bg-gray-300 text-gray-700 inline-block">
              {currentProduct.category}
            </p>
            <p className="text-sm">{currentProduct.description}</p>
            <Rating product={currentProduct} />
            <div className="flex justify-between my-auto w-full items-center">
              <p className="my-2">Price - ${currentProduct.price}</p>
              <Link className="border border-black px-1 py-2 text-sm">
                Add to Card
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
