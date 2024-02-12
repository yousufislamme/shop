"use client";
import { Context } from "@/context";
import Link from "next/link";
import { useContext } from "react";
import { IoMdCart } from "react-icons/io";
const Header = () => {
  const { cartItems } = useContext(Context);
  const totalProductLength = cartItems.length;
  return (
    <header>
      <div className="flex items-center justify-between bg-slate-700 px-10 py-3 text-white">
        <div>
          <Link href="/">
            <h1>Logo</h1>
          </Link>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link
                className="flex items-center justify-center gap-1"
                href="/cart"
              >
                <span>
                  <IoMdCart className="text-xl" />
                </span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-sm text-white">
                  {totalProductLength}
                </span>{" "}
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
