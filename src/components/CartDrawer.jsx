import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import Cart from "./Cart";
import EmptyStage from "./EmptyStage";

const CartDrawer = () => {
  const { toggleCartDrawer, carts } = useContext(DataContext);

  return (
    <section
      id="cart-drawer"
      className="fixed top-0 right-0 z-40 border-2 border-slate-100 h-screen overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 transform-none"
      tabIndex={-1}
      aria-labelledby="drawer-right-label"
      aria-modal="true"
      role="dialog"
    >
      <div className="flex flex-col min-h-screen gap-3 p-4">
        <div className="cart-header">
          <h5
            id="drawer-right-label"
            className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
          >
            <svg
              className="w-4 h-4 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            Your Cart ( <span id="cartCount">{carts.length}</span> )
          </h5>
          <button
            onClick={toggleCartDrawer}
            type="button"
            data-drawer-hide="cart-drawer"
            aria-controls="cart-drawer"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <div
          className="flex flex-col relative flex-grow gap-5"
          id="cartItemGroup"
        >
          {carts.length === 0 && <EmptyStage />}
          {carts.length > 0 &&
            carts.map((cart) => <Cart key={cart.product_id} cart={cart} />)}
        </div>

        <div className="cart-footer fixed bottom-1 right-4 border-t border-slate-500 rounded shadow-sm  p-5 w-[300px] bg-white z-20">
          <div className=" dark:bg-gray-800">
            <div className="text-gray-500 dark:text-gray-400 p-2 flex justify-between">
              <p>Total</p>
              <p id="cartTotal">
                ${" "}
                <span>
                  {carts.reduce((pv, cv) => pv + cv.cost, 0).toFixed(2)}
                </span>
              </p>
            </div>
          </div>
          <button className="order-button w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartDrawer;
