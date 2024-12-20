import React from "react";
import Container from "../components/Container";
import { CategorySection } from "../components/CategorySection";
import { ProductSection } from "../components/ProductSection";

const Home = () => {
  return (
    <div>
      <Container>
        <CategorySection />
        <ProductSection />
      </Container>
    </div>
  );
};

export default Home;
