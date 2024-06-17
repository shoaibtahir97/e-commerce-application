import { useEffect, useState } from "react";
import CarouselComponent from "../components/Carousel";
import CardComponent from "../components/Card";
import axios from "axios";
import { Product } from "../@types/productsTypes";

interface IState {
  products: Product[];
  loading: boolean;
}

const HomeScreen = () => {
  const [state, setState] = useState<IState>({
    products: [],
    loading: false,
  });

  async function fetchProducts() {
    setState({ ...state, loading: true });
    await axios
      .get("/api/products")
      .then((res) => {
        setState({ loading: false, products: res?.data });
      })
      .catch((err) => {
        console.log("Error", err);
        setState({ ...state, loading: false });
      });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const { loading, products } = state;
  return loading ? (
    <div role="status" className="max-w-sm animate-pulse"></div>
  ) : (
    <div className="container">
      <CarouselComponent {...{ products }} />
      <p className="text-2xl ">Products</p>
      <div className="container fluid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {products &&
          products.length > 0 &&
          products?.map((item, _) => (
            <CardComponent key={item._id} product={item} />
          ))}
      </div>
    </div>
  );
};

export default HomeScreen;
