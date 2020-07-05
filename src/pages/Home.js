import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import FreeShipping from "../components/FreeShipping";
import FeaturedProducts from "../components/FeaturedProducts";
import NewArrival from "../components/NewArrival";

function Home() {
  return (
    <>
      <Hero>
        <Banner />
      </Hero>
      <FreeShipping />
      <FeaturedProducts />
      <NewArrival />
    </>
  );
}

export default Home;
