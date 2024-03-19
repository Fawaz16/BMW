import { Navigation } from "../components/Nav";
import Banner from "../components/Banner";
import Explore from "../components/Explore";
import Filter from "../components/Filter";
import React from "react";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <Explore />
      <Filter />
      <Footer />
    </div>
  );
};
