export interface Product {
  _id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
  inStock: boolean;
}
export interface IRating {
  rate: number;
  count: number;
}
