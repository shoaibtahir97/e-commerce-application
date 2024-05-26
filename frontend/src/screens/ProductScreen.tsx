import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../products";
import { Badge, Breadcrumb, Button } from "flowbite-react";
import { HiHome } from "react-icons/hi2";
import Rating from "../components/Rating";
import { SelectComponent } from "../components/Select";
import { BsCartPlus } from "react-icons/bs";
const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((item) => item._id === Number(productId));
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="container mx-5">
      <div className="my-4 ">
        <Breadcrumb>
          <Breadcrumb.Item icon={HiHome}>
            <Link to="/" className=" font-bold hover:text-sky-400">
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/products" className=" font-bold hover:text-sky-400">
              Products
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{product?.title}</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        <div className="bg-slate-100 rounded-lg">
          <img src={product?.image} className="w-10/12 h-5/6" />
        </div>
        <div className="w-5/6 flex flex-col space-y-8 p-4">
          <div>
            {product && product.countInStock && product.countInStock > 0 ? (
              <Badge color="success" className="max-w-fit">
                In Stock
              </Badge>
            ) : (
              <Badge color="failure" className="max-w-fit">
                Out of Stock
              </Badge>
            )}
          </div>
          <h6 className="text-2xl">{product?.title}</h6>
          <Rating rating={product?.rating!} showCount={true} size={"md"} />
          <p className="text-xl ">${product?.price}</p>
          <p className="text-sm text-slate-700 ">{product?.description}</p>
          <div className="flex space-x-8">
            <SelectComponent options={count} label="" />
            <Button
              size="sm"
              disabled={product?.countInStock === 0}
              className="font-bold"
              color="dark"
            >
              <BsCartPlus size="20px" /> Add to Cart
            </Button>
            <Button size="sm" className="font-bold">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
