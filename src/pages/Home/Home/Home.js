import React from "react";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="container mx-auto">
        <Services />
        <Experts />
      </div>
    </>
  );
};

export default Home;
