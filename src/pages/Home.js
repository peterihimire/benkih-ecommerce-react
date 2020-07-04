import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FreeShipping from "../components/FreeShipping";

function Home() {
  return (
    <>
      <Hero>
        <Banner />
      </Hero>
      <FreeShipping />
    </>
  );
}

export default Home;
