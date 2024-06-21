import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [cartDrawer, setCartDrawer] = useState(false);
  const [carts, setCart] = useState([]);
  const [cartBtnInfo, setCartBtnInfo] = useState({});

  // for cat filter

  const [filterProducts, setFilterProducts] = useState([]);

  const addCart = (newCart) => {
    setCart([...carts, newCart]);
  };

  const deleteCart = (id) => {
    setCart(carts.filter((cart) => cart.product_id !== id));
  };

  const updateQuantity = (id, addQuantity) => {
    setCart(
      carts.map((cart) => {
        if (cart.product_id === id) {
          const newQuantity = cart.quantity + addQuantity;
          const newCost = cart.price * newQuantity;

          return {
            ...cart,
            quantity: newQuantity,
            cost: newCost,
          };
        }

        return cart;
      })
    );
  };

  const toggleCartDrawer = () => {
    setCartDrawer(!cartDrawer);
  };

  return (
    <DataContext.Provider
      value={{
        cartDrawer,
        toggleCartDrawer,
        addCart,
        carts,
        setCart,
        updateQuantity,
        deleteCart,
        cartBtnInfo,
        setCartBtnInfo,
        filterProducts,
        setFilterProducts,
        products,
        setProducts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
