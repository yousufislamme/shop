"use client";
import Button from "@/app/cart/Button";
import Header from "@/components/Header";
import { Context } from "@/context";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";

const SingleProduct = ({ params }) => {
  const [singleProduct, setSinglePost] = useState(null);
  const { handleAddToCart, cartItems } = useContext(Context);
  useEffect(() => {
    // Assuming params.productId is the ID or productId of the post
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((data) => setSinglePost(data));
  }, [params.productId]);

  return (
    <>
      <Header />
      <h2>Single product</h2>
      <div className="mx-auto w-8/12 border-2">
        {singleProduct ? (
          <div className="flex justify-between">
            <div className=" border-2">
              <Image
                width={400}
                height={400}
                src={singleProduct.image}
                alt={singleProduct.title}
              />
            </div>
            <div className="ml-5 mt-5 w-full">
              <h1 className="pb-5 text-xl">{singleProduct.title}</h1>
              <p className="mb-2">{singleProduct.description}</p>
              <Button
                onClick={() => handleAddToCart(singleProduct)}
                disabled={
                  cartItems.findIndex(
                    (myItem) => myItem.id === singleProduct.id,
                  ) !== -1
                }
                buttonText="Add To Cart"
              />
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
