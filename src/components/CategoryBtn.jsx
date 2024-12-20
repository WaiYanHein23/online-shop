import React from "react";
import CategoryStore from "../store/CategoryStore";

export const CategoryBtn = ({ category: { id, name, isActive } }) => {
  const { activeCategory } = CategoryStore();
  const handleClick = () => {
    activeCategory(id);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
      <button
        onClick={handleClick}
        className={`${
          isActive && "bg-black text-white"
        } border border-black px-4 py-2 me-3 my-2 text-nowrap`}
      >
        {name}
      </button>
    </div>
  );
};
