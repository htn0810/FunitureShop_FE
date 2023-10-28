"use client";
import { TrashIcon } from "@/app/_icons";
import Image from "next/image";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Product from "@/app/_assets/images/banner-style-2-img-4.jpg";

import { useRouter } from "next/navigation";

const WishlistSidebar = ({
  closeModal,
}: {
  closeModal: (value: boolean) => void;
}) => {
  const router = useRouter();
  const handleRemoveProduct = () => {};
  return (
    <div className="w-full h-full px-6 py-20">
      <h4 className="text-xl md:text-2xl font-medium">Wishlist</h4>
      <div className="mt-8 py-4 max-h-[400px] overflow-auto">
        {Array(7)
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
                  <span> $ 49.00</span>
                </span>
              </div>
              <button onClick={handleRemoveProduct} className="px-2 md:px-4">
                <TrashIcon className="w-4 h-4 text-black hover:text-red-500" />
              </button>
            </div>
          ))}
      </div>
      <button
        className="mt-8 w-full py-3 font-tertiary text-base md:text-lg font-semibold text-white rounded-lg bg-darkYellow hover:opacity-80"
        onClick={() => {
          closeModal(false);
          router.push("/user/wishlist");
        }}
      >
        View Wishlist
      </button>
    </div>
  );
};

export default WishlistSidebar;
