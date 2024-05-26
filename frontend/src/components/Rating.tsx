import { Rating } from "flowbite-react";
import { IRating } from "../@types/productsTypes";

interface RatingProps {
  rating: IRating;
  showCount?: boolean;
  size?: string;
}

const RatingComponent = (props: RatingProps) => {
  let {
    rating: { count, rate },
    showCount = false,
    size = "",
  } = props;
  rate = Math.round(rate);
  return (
    <Rating size={size}>
      {rate >= 1 ? <Rating.Star /> : <Rating.Star filled={false} />}
      {rate >= 2 ? <Rating.Star /> : <Rating.Star filled={false} />}
      {rate >= 3 ? <Rating.Star /> : <Rating.Star filled={false} />}
      {rate >= 4 ? <Rating.Star /> : <Rating.Star filled={false} />}
      {rate >= 5 ? <Rating.Star /> : <Rating.Star filled={false} />}
      {showCount && (
        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          ({count} reviews)
        </p>
      )}
    </Rating>
  );
};

export default RatingComponent;
