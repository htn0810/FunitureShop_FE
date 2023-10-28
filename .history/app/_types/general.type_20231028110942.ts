import { StaticImageData } from "next/image";

export type THeaderLink = {
  title: string;
  path: string;
};

export type TService = {
  title: string;
  desc: string;
  img: StaticImageData;
};

export type TSpecialIcon = {
  quantity?: number;
  className?: string;
  onClick?: () => void;
};

export type TUserLink = {
  title: string;
  path: string;
};

export interface IWishListProduct {
  key: string;
  image: StaticImageData;
  product: string;
  price: number;
  delete: React.ReactNode;
}

export interface ICartProduct {
  key: string;
  image: StaticImageData;
  product: string;
  price: number;
  quantity: number;
  total: number;
  delete: React.ReactNode;
}
