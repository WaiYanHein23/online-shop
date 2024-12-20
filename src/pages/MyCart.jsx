import React from "react";
import Container from "../components/Container";
import CartSection from "../components/CartSection";
import BreadCrumb from "../components/BreadCrumb";

const MyCart = () => {
  return (
    <div>
      <Container>
        <BreadCrumb currentPage="My Cart" />
        <CartSection />
      </Container>
    </div>
  );
};

export default MyCart;
