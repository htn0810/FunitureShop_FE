import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/app/_icons";
import logo from "@/app/_assets/images/logo_black.png";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-24 bg-softYellow">
      <div className="flex items-center justify-center bg-softYellow py-24 ">
        <div className="flex w-[1160px] flex-col items-center justify-center px-[15px] lg:flex-row">
          <div>
            <Image
              src={logo}
              alt="Logo"
              width={190}
              height={48}
              className="object-cover"
            />
            <div className="mt-8">
              <input
                className="w-[200px] rounded-tl-md rounded-bl-md bg-white px-6 py-3 outline-none xs:w-[241px]"
                type="text"
                placeholder="Enter your email address"
              />
              <button className="px-6 py-3 text-white rounded-sm bg-pinkC">
                Sign Up
              </button>
            </div>
            <div className="mt-6 text-[#8A8FB9]">Contact Info</div>
            <p className="mt-3 text-[#8A8FB9]">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 mt-7 gap-x-5 gap-y-5 sm:grid-cols-3 sm:gap-y-0 lg:mt-0">
            <div className="flex flex-col place-items-center">
              <h3 className="text-xl font-semibold font-primary">Catagories</h3>
              <ul className="flex flex-col mt-10 text-base gap-y-3 text-subTextC">
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>
            <div className="flex flex-col place-items-center">
              <h3 className="text-xl font-semibold font-primary">
                Customer Care
              </h3>
              <ul className="flex flex-col mt-10 text-base gap-y-3 text-subTextC">
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>
            <div className="flex flex-col place-items-center">
              <h3 className="text-xl font-semibold font-primary">Pages</h3>
              <ul className="flex flex-col mt-10 text-base gap-y-3 text-subTextC">
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#E7E4F8] bg-[#e6d6b9]">
        <div className="flex w-[1160px] justify-between px-[15px] py-4">
          <h3 className="font-semibold text-grayC">
            ©Webecy - All Rights Reserved
          </h3>
          <div className="flex gap-x-4">
            <InstagramIcon></InstagramIcon>
            <FacebookIcon></FacebookIcon>
            <TwitterIcon></TwitterIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
