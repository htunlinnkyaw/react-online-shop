import React, { useContext, useEffect, useRef } from "react";
import Container from "./Container";
import { DataContext } from "../contexts/DataContext";

const Header = () => {
  const { toggleCartDrawer, carts, setCartBtnInfo } = useContext(DataContext);

  const cartBtnRef = useRef();

  useEffect(() => {
    setCartBtnInfo(cartBtnRef.current.getBoundingClientRect());
  }, []);

  return (
    <header className="border-b-2 border-b-gray-400 py-3">
      <Container>
        <div className="flex justify-between">
          <div className="">
            <h1 className="font-bold text-3xl">MMS Solutions</h1>
            <p className="text-neutral-500">E-commerce</p>
          </div>
          <div className="flex gap-3 items-center">
            <button
              type="button"
              className="text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>

              <span className="sr-only">Icon description</span>
            </button>
            <button
              ref={cartBtnRef}
              onClick={toggleCartDrawer}
              data-drawer-target="cart-drawer"
              data-drawer-show="cart-drawer"
              data-drawer-placement="right"
              aria-controls="cart-drawer"
              id="openDrawer"
              type="button"
              className="animate__animated text-white relative bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center `dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>

              <span className="sr-only">Icon description</span>
              <span
                className="bg-red-600 absolute top-0 right-0 text-[9px] translate-x-1/2 -translate-y-1/2 w-4 h-4 flex justify-center items-center text-center rounded-full"
                id="cartItemCount"
              >
                {carts.length}
              </span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
