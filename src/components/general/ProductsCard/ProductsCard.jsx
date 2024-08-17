import moment from "moment";
import PropTypes from "prop-types";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { TiStarFullOutline } from "react-icons/ti";

const ProductsCard = ({ product }) => {
  const { img, name, category, description, price, ratings, time, brand } = product;
  return (
    <div className="bg-[#a1a1a121] shadow-lg rounded-3xl flex flex-col justify-between">
      <div className="relative z-[-1]">
        <div className="w-full h-[14rem] sm:h-[18.75rem] md:h-[22vw] lg:h-[11rem] xl:h-[12.5rem] 2xl:h-[18.75rem]">
          <img className="size-full object-cover rounded-2xl" src={img} alt={name} />
        </div>
        <p className="absolute flex items-center gap-1 left-4 bottom-4 bg-primary-color px-5 py-2 rounded-xl text-lg text-white font-medium">
          <TiStarFullOutline className="text-xl" />
          <span>{ratings}</span>
        </p>
      </div>
      <h1 className="font-bold text-2xl mt-4 px-4">{name}</h1>
      <div className="flex items-center gap-2 py-1 px-4">
        <p>{description}</p>
      </div>
      <div className="flex justify-between items-center gap-2 flex-wrap mt-4 px-4">
        <h6 className="text-2xl text-primary-color font-semibold">${price}</h6>
        <div title="Category name" className="flex items-center gap-2 py-1">
          <BiSolidCategoryAlt className="text-xl" />
          <p>{category}</p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 flex-wrap mb-4 px-4">
        <div title="brand name" className="flex items-center gap-2 py-1 text-xs text-gray-500">
          <p>Added: {moment(time).format("DD/MM/YYYY, LT")}</p>
        </div>
        <p>{brand}</p>
      </div>
    </div>
  );
};

ProductsCard.propTypes = {
  craftItem: PropTypes.object,
};

export default ProductsCard;
