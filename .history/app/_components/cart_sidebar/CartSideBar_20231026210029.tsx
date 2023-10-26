import Image from "next/image";
import React from "react";
import Product from "@/app/_assets/images/banner-style-2-img-3.jpg";

const CartSideBar = () => {
  return (
    <div className="w-full h-full px-4 py-20">
      <h4 className="text-xl md:text-2xl font-medium">Shopping Cart</h4>
      <div className="mt-8 py-4">
        <div className="flex gap-x-4">
          <Image
            src={Product}
            alt="Product"
            className="w-[100px] h-[120px] object-contain bg-grayF6"
          />
          <div className="flex flex-col gap-y-4 justify-center">
            <h6 className="text-base font-tertiary font-semibold">Car Wheel</h6>
            <span className="text-lg">
              <span>1 </span>
              <span> x </span>
              <span> $ 49.00</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSideBar;
