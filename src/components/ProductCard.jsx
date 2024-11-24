import React from "react";

const ProductCard = ({ name, image, prize, onOrderClick }) => {
  return (
    <div className="flex flex-col items-center border-4 border-black w-[250px] pb-4 rounded-lg hover:shadow-lg transition-shadow duration-200 group overflow-hidden">
      {/* Product Image */}
      <img
        className="w-[230px] h-[200px] object-cover rounded-t-lg group-hover:scale-110 duration-300"
        src={image}
        alt={name}
      />

      {/* Product Name */}
      <h2 className="text-[16px] font-bold font-bangla mt-3 mb-2 text-center px-2">
        {name}
      </h2>

      {/* Product Price */}
      <h4 className="text-[15px] font-semibold font-bangla mb-3">
        Price: <span className="text-red-600">৳ {prize}</span>
      </h4>

      {/* Order Button */}
      <button
        onClick={() => onOrderClick(name)}
        className="mt-2 text-[18px] font-bangla font-semibold text-white px-4 py-2 bg-black rounded-lg 
                   hover:bg-transparent hover:border-2 hover:border-black hover:text-black 
                   transition-all duration-150"
      >
        Order Now
      </button>
    </div>
  );
};

export default ProductCard;
