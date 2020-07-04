import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FreeShipping from "../components/FreeShipping";
import FeaturedProducts from "../components/FeaturedProducts";

function Home() {
  return (
    <>
      <Hero>
        <Banner />
      </Hero>
      <FreeShipping />
      <FeaturedProducts />
    </>
  );
}

export default Home;
