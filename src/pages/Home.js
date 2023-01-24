import React from "react";
import ProductCard from "../Components/productCard";
import { ProductsData } from "../DummyData";
import "../App.css";

const Home = () => {
  return (
    <div className="Home-product-cards">
      {ProductsData.map((Data, idx) => {
        return <ProductCard Data={Data} key={idx} />;
      })}
    </div>
  );
};

export default Home;
