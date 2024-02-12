"use client"
import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);


function GlobalState({ children }) {
   const [cartItems, setCartItems] = useState([]);

   function handleAddToCart(getCurrentItem) {
      let copyCartItems = [...cartItems];
      const indexOfCurrentItem = copyCartItems.findIndex(item => item.id === getCurrentItem.id);

      console.log(indexOfCurrentItem);
      if (indexOfCurrentItem === -1) {
         copyCartItems.push(getCurrentItem);
      }
      setCartItems(copyCartItems);
      localStorage.setItem('cartItems', JSON.stringify(copyCartItems))

   }

   function removeFromCart(getCurrentItem) {
      console.log(getCurrentItem);
      let copyCartItems = [...cartItems];
      copyCartItems = copyCartItems.filter(item => item.id !== getCurrentItem);
      setCartItems(copyCartItems);
      localStorage.setItem('cartItems', JSON.stringify(copyCartItems));
   }

   useEffect(() => {
      setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
   }, []);

   return (
      <Context.Provider value={{ cartItems, handleAddToCart, removeFromCart }}>
         {children}
      </Context.Provider>
   )
}

export default GlobalState;