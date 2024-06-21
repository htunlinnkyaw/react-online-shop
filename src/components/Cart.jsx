import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Cart = ({
  cart: { product_id, image, title, price, cost, quantity },
}) => {
  const { updateQuantity, deleteCart } = useContext(DataContext);

  const handleDelBtn = () => {
    deleteCart(product_id);
  };

  return (
    <div className="cart-item group overflow-hidden">
      <img
        className="cart-item-img relative z-10 h-16 ms-5 -mb-8"
        src={image}
        alt=""
      />

      <div className="cart-info relative rounded-md border border-gray-400 p-5">
        <button
          onClick={handleDelBtn}
          className="cart-item-remove absolute opacity-0 pointer-events-none duration-300 group-hover:opacity-100 group-hover:pointer-events-auto top-5 right-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 stroke-red-600 pointer-events-none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
        <p className="cart-item-title line-clamp-1 font-bold mb-3 mt-5">
          {title}
        </p>
        <div className="flex justify-between">
          <p>
            $ <span className="cart-item-cost">{cost}</span>
            <span className="cart-item-price hidden">{price}</span>
          </p>
          <div className="">
            <button
              onClick={() => quantity > 1 && updateQuantity(product_id, -1)}
              className="cart-q-sub -translate-x-10 group-hover:translate-x-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto print:hidden active:scale-75 duration-300 bg-gray-200 rounded p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </button>
            <span className="cart-quantity w-5 inline-block text-end">
              {quantity}
            </span>
            <button
              onClick={() => updateQuantity(product_id, 1)}
              className="cart-q-add translate-x-10 group-hover:translate-x-0 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto print:hidden active:scale-75 duration-300 bg-gray-200 rounded p-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 pointer-events-none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
