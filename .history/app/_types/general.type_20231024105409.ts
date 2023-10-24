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
  props: JSX.IntrinsicElements["svg"];
};
