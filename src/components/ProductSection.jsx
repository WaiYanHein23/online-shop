import React from "react";
import ProductCard from "./ProductCard";
import ProductStore from "../store/ProductStore";
export const ProductSection = () => {
  const { products } = ProductStore();
  return (
    <section className="p-5 mb-4">
      <p className=" text-gray-500 mb-2">Available Product List</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
