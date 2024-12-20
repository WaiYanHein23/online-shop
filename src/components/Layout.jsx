import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Container from "./Container";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
      <Toaster />
    </div>
  );
};

export default Layout;
