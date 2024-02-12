"use client";
import Header from "@/components/Header";
import { Context } from "@/context";
import Image from "next/image";
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
          <div className="m-auto grid w-[70%] grid-rows-1 gap-4 sm:grid-rows-2 md:grid-rows-3 lg:grid-rows-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className=" group m-4 flex justify-between overflow-hidden rounded-lg border-2 bg-white shadow-md hover:shadow-xl"
              >
                <div className="flex items-center">
                  <div className="flex-none">
                    <Image
                      className="h-[50px] w-[50px] gap-5 rounded-t-lg bg-no-repeat object-cover object-top duration-150 group-hover:scale-105"
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <h1 className="mb-2 block text-sm font-semibold leading-6 text-slate-700">
                      <Link href="">{item.title}</Link>
                    </h1>
                    <div className="flex">
                      <p>
                        {item.rating.rate}({item.rating.count})
                      </p>
                      <p className="text-md text-slate-900"> ${item.price}</p>
                    </div>
                  </div>
                </div>
                <div className="px-3 py-2">
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
