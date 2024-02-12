"use client";
import Header from "@/components/Header";
import { Context } from "@/context";
import Link from "next/link";
import { useContext, useMemo } from "react";
import Button from "./Button";

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(Context);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price, 0);
  }, [cartItems]);

  return (
    <>
      <Header />
      <h1 className="text-xl">Cart page</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl"
              >
                <img
                  className="h-[300px] w-[300px] gap-5 rounded-t-lg bg-no-repeat object-cover object-top duration-150 group-hover:scale-105"
                  src={item.image}
                  alt={item.title}
                />
                <div className="px-3 py-2">
                  <h1 className="mb-2 text-lg font-semibold leading-6">
                    <Link href="">{item.title}</Link>
                  </h1>
                  <p>
                    {item.rating.rate}({item.rating.count})
                  </p>
                  <p className="text-2xl">${item.price}</p>
                  <Button
                    buttonText="Remove from Cart"
                    onClick={() => removeFromCart(item.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
