import { Grid } from "antd";
import { Badge, Carousel } from "flowbite-react";
import { Product } from "../@types/productsTypes";
import "./carousel.css";

interface CarouselProps {
  products: Product[];
}
//

const CarouselComponent: React.FC<CarouselProps> = (props) => {
  const { products } = props;
  const carouselProducts = products?.slice(0, 4);
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 my-10 rounded-lg  bg-gradient-to-r from-slate-100 ">
      <Carousel slideInterval={3000}>
        {carouselProducts?.map((product, _) => (
          <div
            key={product._id}
            className="flex h-full items-center justify-center  text-slate-950"
          >
            <div className="w-max">
              <Badge color="warning" className="w-50">
                Flat Discount 50%
              </Badge>
              <h3 className="product-title">{product.title}</h3>
              {/* <p className="text">{product.description}</p> */}
            </div>
            <div>
              <img src={product.image} width="350px" />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
