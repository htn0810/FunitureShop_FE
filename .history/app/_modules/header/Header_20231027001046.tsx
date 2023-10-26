"use client";
import {
  CartIcon,
  CloseIcon,
  HeartIcon,
  MenuIcon,
  UserIcon,
} from "@/app/_icons";
import Image from "next/image";
import { useState } from "react";
import LogoBlack from "@/app/_assets/images/logo_black.png";
import LogoWhite from "@/app/_assets/images/logo_white.png";
import Link from "next/link";
import { HeaderLinks } from "../../_constants/general.const";
import Modal from "@/app/_components/modal";
import CartSideBar from "@/app/_components/cart_sidebar";
import ButtonClose from "../../_components/button_close/index";
import WishlistSidebar from "@/app/_components/wishlist_sidebar";

const Header = () => {
  const [toggleMenuSideBar, setToggleMenuSideBar] = useState<boolean>(false);
  const [showModalCart, setShowModalCart] = useState<boolean>(false);
  const [showModalWishlist, setShowModalWishlist] = useState<boolean>(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="flex w-full items-center justify-between bg-softYellow p-[15px] md:px-[40px] md:py-[25px] xl:px-[90px]">
        <div className="w-24 h-6 cursor-pointer">
          <Image
            src={LogoBlack}
            alt="Logo"
            width={96}
            height={24}
            className="object-cover w-full h-full"
          />
        </div>
        <ul className="hidden text-base font-semibold list-none gap-x-9 lg:flex">
          {HeaderLinks.map((headerItem) => (
            <Link href={headerItem.path} key={headerItem.title}>
              <li className="cursor-pointer hover:text-pinkC ">
                {headerItem.title}
              </li>
            </Link>
          ))}
        </ul>
        <div className="flex items-center gap-x-4 md:gap-x-9">
          <CartIcon
            quantity={5}
            onClick={() => setShowModalCart(true)}
          ></CartIcon>
          <HeartIcon
            quantity={7}
            onClick={() => setShowModalWishlist(true)}
          ></HeartIcon>
          <UserIcon></UserIcon>
          <div
            onClick={() => setToggleMenuSideBar((prev) => !prev)}
            className="block lg:hidden"
          >
            <MenuIcon></MenuIcon>
          </div>
        </div>
      </div>

      {/* {Header Mobile} */}
      <div
        className={`absolute ${
          toggleMenuSideBar ? "translate-x-0" : "translate-x-[200%]"
        } top-0 right-0 flex min-h-screen w-full duration-500 lg:hidden`}
      >
        <div
          onClick={() => setToggleMenuSideBar((prev) => !prev)}
          className={`basis-1/3 bg-overlayModal  duration-700 md:basis-1/2 ${
            toggleMenuSideBar ? "translate-x-0" : "-translate-x-[100%]"
          }`}
        ></div>
        <div
          className={`basis-2/3 bg-grayDarkC  duration-700 md:basis-1/2 ${
            toggleMenuSideBar ? "translate-x-0" : "translate-x-[100%]"
          }`}
        >
          <button
            onClick={() => setToggleMenuSideBar(false)}
            className="absolute top-[20px] right-[20px] font-bold text-white md:top-[40px] md:right-[40px]"
          >
            <CloseIcon></CloseIcon>
          </button>
          <ul className="flex flex-col w-full p-8 mt-24 text-white uppercase gap-y-8">
            {HeaderLinks.map((headerItem) => (
              <Link href={headerItem.path} key={headerItem.title}>
                <li className="cursor-pointer hover:text-pinkC ">
                  {headerItem.title}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex justify-center mt-4">
            <Image
              src={LogoWhite}
              alt="Logo"
              width={96}
              height={24}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Show Modal Menu */}
      <Modal showModal={toggleMenuSideBar} setShowModal={setToggleMenuSideBar}>
        <div className="w-full h-full px-6 py-4 bg-grayDarkC">
          <ul className="flex flex-col w-full p-8 mt-24 text-white uppercase gap-y-8">
            {HeaderLinks.map((headerItem) => (
              <Link href={headerItem.path} key={headerItem.title}>
                <li className="cursor-pointer hover:text-pinkC ">
                  {headerItem.title}
                </li>
              </Link>
            ))}
          </ul>
          <div className="flex justify-center mt-4">
            <Image
              src={LogoWhite}
              alt="Logo"
              width={96}
              height={24}
              className="object-cover"
            />
          </div>
        </div>
        <ButtonClose closeModal={setToggleMenuSideBar} />
      </Modal>
      {/* Show Modal Cart */}
      <Modal showModal={showModalCart} setShowModal={setShowModalCart}>
        <CartSideBar />
        <ButtonClose closeModal={setShowModalCart} />
      </Modal>
      {/* Show Modal Wishlist */}
      <Modal showModal={showModalWishlist} setShowModal={setShowModalWishlist}>
        <WishlistSidebar />
        <ButtonClose closeModal={setShowModalWishlist} />
      </Modal>
    </header>
  );
};

export default Header;
