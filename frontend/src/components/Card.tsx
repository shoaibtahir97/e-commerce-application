import React from "react";
import { Product } from "../@types/productsTypes";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import RatingComponent from "./Rating";

interface CardProps {
  product: Product;
}

const CardComponent: React.FC<CardProps> = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product._id}`}>
        <img src={product.image} className="product-image" />
        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white product-title">
          {product.title}
        </h5>
      </Link>
      <div className="mb-5 mt-2.5 flex items-center">
        <RatingComponent rating={product.rating} />
        <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
          {product.rating.rate}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          ${product.price}
        </span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>
    </Card>
  );
};

export default CardComponent;
