"use client";
import { CartIcon, HeartIcon, MenuIcon, UserIcon } from "@/app/_icons";
import Image from "next/image";
import { useState } from "react";
import LogoBlack from "@/app/_assets/images/logo_black.png";
import Link from "next/link";
import { BASE_NAME, HeaderLinks } from "../../_constants/general.const";
import Modal from "@/app/_components/modal";
import CartSideBar from "@/app/_components/cart_sidebar";
import ButtonClose from "../../_components/button_close/index";
import WishlistSidebar from "@/app/_components/wishlist_sidebar";
import MenuSidebar from "../../../.history/app/_components/menu_sidebar/MenuSidebar_20231027001316";
import { useRouter } from "next/navigation";
import LogoutIcon from "@/app/_icons/LogoutIcon";
import { useAppDispatch, useAppSelector } from "@/app/_custom_hooks/redux.hook";
import Cookies from "universal-cookie";
import { deleteAccount } from "@/app/_store/account.slice";
import { toast } from "react-toastify";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showModalCart, setShowModalCart] = useState<boolean>(false);
  const [showModalWishlist, setShowModalWishlist] = useState<boolean>(false);

  const router = useRouter();
  const account = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();
  const cookies = new Cookies({ path: "/" });

  const handleLogout = () => {
    cookies.remove("jwt token");
    dispatch(deleteAccount());
    router.push(BASE_NAME!);
    toast("Logout successfully!", {
      type: "success",
      pauseOnHover: false,
      autoClose: 2000,
    });
  };
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
          <span onClick={() => router.push("/user/profile")}>
            <UserIcon />
          </span>
          {account.email !== "" && (
            <LogoutIcon
              className="w-6 h-6 cursor-pointer hover:text-pinkC"
              onClick={handleLogout}
            />
          )}
          <div
            onClick={() => setShowMenu((prev) => !prev)}
            className="block lg:hidden"
          >
            <MenuIcon></MenuIcon>
          </div>
        </div>
      </div>
      {/* Show Modal Menu */}
      <Modal showModal={showMenu} setShowModal={setShowMenu}>
        <MenuSidebar />
        <ButtonClose closeModal={setShowMenu} />
      </Modal>
      {/* Show Modal Cart */}
      <Modal showModal={showModalCart} setShowModal={setShowModalCart}>
        <CartSideBar closeModal={setShowModalCart} />
        <ButtonClose closeModal={setShowModalCart} />
      </Modal>
      {/* Show Modal Wishlist */}
      <Modal showModal={showModalWishlist} setShowModal={setShowModalWishlist}>
        <WishlistSidebar closeModal={setShowModalWishlist} />
        <ButtonClose closeModal={setShowModalWishlist} />
      </Modal>
    </header>
  );
};

export default Header;
