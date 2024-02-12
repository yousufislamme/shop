"use client";
import Header from "@/components/Header";
import { Context } from "@/context";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import Button from "../cart/Button";
const Products = () => {
  const [product, setProduct] = useState([]);
  const { handleAddToCart, cartItems } = useContext(Context);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((Data) => setProduct(Data));
  }, []);

  const idsToRemove = [1, 6, 8, 10, 11, 13, 14];
  const newArray = product.filter((item) => !idsToRemove.includes(item.id));

  const [isColumnLayout, setIsColumnLayout] = useState(true);

  const toggleLayout = () => {
    setIsColumnLayout((prev) => !prev);
  };
  return (
    <>
      <Header />
      <div className="container mx-auto px-10">
        <div className="my-1 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Products</h1>
          <div>
            <button
              onClick={toggleLayout}
              className="rounded-md px-2 py-2 shadow-lg"
            >
              {isColumnLayout ? (
                <CiGrid2H className="text-xl" />
              ) : (
                <CiGrid41 className="text-xl" />
              )}
            </button>
          </div>
        </div>
        {/* all products fetch with map*/}
        <div>
          <div
            className={`${isColumnLayout ? "grid " : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4"} gap-5  bg-slate-200 p-5`}
          >
            {newArray.map((item, index) => (
              <div
                id={item.id}
                className={`${isColumnLayout ? "flex" : "flex-none"} group overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl`}
              >
                <Image
                  quality={20}
                  width={400}
                  height={400}
                  className="h-[300px] w-[300px] gap-5  rounded-t-lg bg-no-repeat object-cover object-top duration-150 group-hover:scale-105"
                  src={item.image}
                  alt={item.title}
                />
                <div className="px-3 py-2">
                  <h1 className="mb-2 text-lg font-semibold leading-6">
                    {/* click to single page  */}
                    <Link href={`/products/${item.id}`} passHref>
                      {item.title}
                    </Link>
                  </h1>
                  <p>
                    {item.rating.rate}({item.rating.count})
                  </p>
                  <p className="text-2xl ">${item.price}</p>
                  {/* <button>add to cart</button> */}
                  <Button
                    buttonText="Add to Cart"
                    disabled={
                      cartItems.findIndex((myItem) => myItem.id === item.id) !==
                      -1
                    }
                    onClick={() => handleAddToCart(item)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
