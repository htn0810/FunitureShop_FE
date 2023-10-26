import Image from "next/image";
import React from "react";
import Product from "@/app/_assets/images/banner-style-2-img-3.jpg";
import { TrashIcon } from "@/app/_icons";

const CartSideBar = () => {
  return (
    <div className="w-full h-full px-6 py-20">
      <h4 className="text-xl md:text-2xl font-medium">Shopping Cart</h4>
      <div className="mt-8 py-4">
        <div className="flex gap-x-4">
          <Image
            src={Product}
            alt="Product"
            className="w-[100px] h-[80px] object-contain bg-grayF6"
          />
          <div className="flex flex-col gap-y-1 justify-center flex-1">
            <h6 className="text-base font-tertiary font-semibold">Car Wheel</h6>
            <span className="text-lg text-grayC">
              <span>1 </span>
              <span> x </span>
              <span> $ 49.00</span>
            </span>
          </div>
          <button>
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSideBar;
