"use client";
import Image from "next/image";
import React from "react";
import Product from "@/app/_assets/images/banner-style-2-img-3.jpg";
import { TrashIcon } from "@/app/_icons";
import { v4 as uuidv4 } from "uuid";

const CartSideBar = () => {
  const handleRemoveProduct = () => {};
  return (
    <div className="w-full h-full px-6 py-20">
      <h4 className="text-xl md:text-2xl font-medium">Shopping Cart</h4>
      <div className="mt-8 py-4 h-[400px] overflow-auto">
        {Array(15)
          .fill(0)
          .map(() => (
            <div key={uuidv4()} className="flex gap-x-4 mb-4">
              <Image
                src={Product}
                alt="Product"
                className="w-[80px] h-[60px] md:w-[100px] md:h-[80px] object-contain bg-grayF6"
              />
              <div className="flex flex-col gap-y-1 justify-center flex-1">
                <h6 className="text-sm md:text-base font-tertiary font-semibold">
                  Car Wheel
                </h6>
                <span className="text-base md:text-lg text-grayC">
                  <span>1 </span>
                  <span> x </span>
                  <span> $ 49.00</span>
                </span>
              </div>
              <button
                onClick={handleRemoveProduct}
                className="px-2 md:px-6 rounded-sm bg-softYellow hover:bg-darkYellow"
              >
                <TrashIcon />
              </button>
            </div>
          ))}
      </div>
      <div className="mt-8 flex justify-between font-tertiary text-lg text-grayC">
        <span className="font-bold text-grayC">Total:</span>
        <span>$ 1000</span>
      </div>
    </div>
  );
};

export default CartSideBar;
