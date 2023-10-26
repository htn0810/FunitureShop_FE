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
        </div>
      </div>
    </div>
  );
};

export default CartSideBar;
