import React from "react";
import Container from "./Container";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="p-5 mx-4  bg-black text-center text-white">
      @{date.getFullYear()} All Rights Reserved
    </footer>
  );
};

export default Footer;
