import React, { useContext, useEffect, useRef, useState } from "react";
import StartRating from "./StartRating";
import { DataContext } from "../contexts/DataContext";
import AnimationImage from "./AnimationImage";

const Product = ({
  product: {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count },
  },
}) => {
  const { addCart, carts } = useContext(DataContext);

  const [animate, setAnimate] = useState(false);

  // used to handle the added state and carts
  const isInCart = carts.some((cart) => cart.product_id === id);

  const handleAddToCart = () => {
    if (!isInCart) {
      console.log("item added to cart");
      const newCart = {
        product_id: id,
        title,
        image,
        price,
        quantity: 1,
        cost: price,
      };
      addCart(newCart);
      setAnimate(true);
    }
  };

  const [info, setInfo] = useState({});

  const imgRef = useRef();

  useEffect(() => {
    setInfo(imgRef.current.getBoundingClientRect());
  }, []);

  return (
    <div className="product-card col-span-1">
      <img
        ref={imgRef}
        className="product-img h-[100px] ms-5 -mb-[50px]"
        src={image}
        alt=""
      />
      {animate && (
        <AnimationImage src={image} info={info} setAnimate={setAnimate} />
      )}
      <div className="product-info border border-gray-700 rounded p-5 w-full">
        <p className="product-title line-clamp-1 font-bold mt-[40px] mb-3">
          {title}
        </p>
        <p className="product-description line-clamp-3 text-sm mb-5">
          {description}
        </p>
        <div className="flex justify-between items-center mb-3">
          <StartRating rate={rate} />
          <p className="product-rating">
            ( {rate} / {count} )
          </p>
        </div>

        <hr className="border-gray-700 mb-3" />
        <p className="font-bold mb-5">
          $ <span className="product-price">{price}</span>
        </p>
        <button
          onClick={handleAddToCart}
          className={`product-add-cart-btn duration-200 active:scale-95 disabled:active:scale-100 disabled:bg-gray-700 disabled:text-white w-full border rounded border-gray-700 p-2 ${
            isInCart && "bg-gray-500 text-white"
          }`}
        >
          {isInCart ? "Added" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default Product;
