import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="text-center mt-5 ">
      <p className="text-white">Copyright © {year}</p>
    </div>
  );
};

export default Footer;
