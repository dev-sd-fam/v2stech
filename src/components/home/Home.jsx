import React from "react";
import "./home.css"
import Filter from "../Filter/Filter";
import Products from "../Products/Products";

const Home = () => {
  return (
    <section className="home-filter">
      <div className="wrapper">
        <h1 className="main-heading">Filter API Data</h1>
        <div className="container">
          <Filter />
          <Products />
        </div>
      </div>
    </section>
  );
};

export default Home;
