import React from "react";
import { CategoryBtn } from "./CategoryBtn";
import Container from "./Container";
import CategoryStore from "../store/CategoryStore";

export const CategorySection = () => {
  const title = "Product Categories";
  const { categories } = CategoryStore();
  return (
    <section className="p-5">
      <p className="text-gray-600 ">{title}</p>

      <div className="flex overflow-scroll scroll_bar">
        {categories.map((category) => (
          <CategoryBtn key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};
