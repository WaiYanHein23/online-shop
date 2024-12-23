import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ currentPage }) => {
  return (
    <div className="flex mx-4 mb-2 ">
      <Link to={"/"}>Back</Link>
      <span className="mx-3"> / </span>
      <p className="text-gray-600">{currentPage}</p>
    </div>
  );
};

export default BreadCrumb;
