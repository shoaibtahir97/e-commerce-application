import { Rating } from "flowbite-react";
import { IRating } from "../@types/productsTypes";

interface RatingProps {
  rating: IRating;
  showCount?: boolean;
  size?: string;
}

const RatingComponent = (props: RatingProps) => {
  const { rating, showCount = false, size = "" } = props;
  const rate = Math.round(rating?.rate);
  return (
    <Rating size={size}>
      {rate >= 1 ? <Rating.Star /> : <Rating.Star filled={false} />}
      {rate >= 2 ? <Rating.Star /> : <Rating.Star filled={false} />}
      {rate >= 3 ? <Rating.Star /> : <Rating.Star filled={false} />}
      {rate >= 4 ? <Rating.Star /> : <Rating.Star filled={false} />}
      {rate >= 5 ? <Rating.Star /> : <Rating.Star filled={false} />}
      {showCount && (
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          ({rating?.count} reviews)
        </p>
      )}
    </Rating>
  );
};

export default RatingComponent;
