"use client";
import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((Data) => setProduct(Data));
  }, []);
  const idsToRemove = [1, 6, 8, 10, 11, 13, 14];
  const newArray = product.filter((item) => !idsToRemove.includes(item.id));
  console.log(newArray);

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
              className="rounded-md bg-gray-300 px-2 py-2 shadow-lg"
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
            className={`${isColumnLayout ? "grid " : "grid grid-cols-4"}  gap-5 bg-slate-200`}
          >
            {newArray.map((item, index) => (
              <div
                id={item.id}
                className={`${isColumnLayout ? "flex" : "flex-none"} bg-blue-400`}
              >
                <img
                  className="h-[300px] min-w-[300px] gap-5 bg-no-repeat object-cover object-top "
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
                  <p className="text-2xl ">${item.price}</p>
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
