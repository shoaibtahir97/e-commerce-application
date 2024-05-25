import React from "react";
import CarouselComponent from "../components/Carousel";
import products from "../products";
import CardComponent from "../components/Card";
const HomeScreen = () => {
  return (
    <div className="container mx-8">
      <CarouselComponent {...{ products }} />
      <p className="text-2xl ">Products</p>
      <div className="container fluid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
        {products.map((item, _) => (
          <CardComponent key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
